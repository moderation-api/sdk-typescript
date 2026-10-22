/*
 * Verify webhook deliveries from Moderation API.
 *
 * Every delivery is signed with HMAC-SHA256 over the raw request body, using
 * your project's webhook signing secret. The hex-encoded signature is in the
 * `modapi-signature` header.
 *
 * Maintained by hand in moderation-api/sdk-generator (custom/typescript), not
 * generated.
 */

export const WEBHOOK_SIGNATURE_HEADER = "modapi-signature";
export const WEBHOOK_SECRET_ENV_VAR = "MODAPI_WEBHOOK_SECRET";

export type WebhookEventType =
  | "author.action"
  | "author.blocked"
  | "author.suspended"
  | "author.trust_level_changed"
  | "author.unblocked"
  | "author.updated"
  | "queue_item.action"
  | "queue_item.allowed"
  | "queue_item.rejected"
  | "queue_item.resolved";

/** A webhook event as delivered: the parsed JSON body. */
export type WebhookEvent = {
  id: string;
  type: WebhookEventType;
  api_version: string;
  created: string;
  data: { object: Record<string, unknown> } & Record<string, unknown>;
};

/** The signature is missing or does not match the payload. */
export class WebhookSignatureError extends Error {
  override name = "WebhookSignatureError";
}

/**
 * A webhook delivery. Accepts a Fetch API `Request` (Next.js App Router, Hono,
 * Bun, Workers) or a Node.js request (Express, Next.js Pages Router) with the
 * raw body in `body` or still unread on the stream.
 */
export type WebhookRequest =
  | Request
  | {
    body?: BodyInit | Uint8Array | string | null | undefined;
    headers: Headers | Record<string, string | string[] | undefined>;
    [Symbol.asyncIterator]?: () => AsyncIterator<Uint8Array | string>;
  };

const encoder = new TextEncoder();

/**
 * Verify a delivery and return the event. `secret` defaults to the
 * MODAPI_WEBHOOK_SECRET environment variable. Throws `WebhookSignatureError`
 * if the signature does not match.
 */
export async function validateWebhook({
  request,
  secret,
}: {
  request: WebhookRequest;
  secret?: string | undefined;
}): Promise<WebhookEvent> {
  const body = await readBody(request);
  const signature = readHeader(request, WEBHOOK_SIGNATURE_HEADER);
  if (!(await verifyWebhookSignature(body, signature, secret))) {
    throw new WebhookSignatureError(
      "Webhook signature does not match the payload",
    );
  }
  return JSON.parse(new TextDecoder().decode(body)) as WebhookEvent;
}

/** Return true if `signature` is the HMAC-SHA256 of the raw `payload`. */
export async function verifyWebhookSignature(
  payload: Uint8Array | string,
  signature: string | null | undefined,
  secret?: string | undefined,
): Promise<boolean> {
  const key = secret || envSecret();
  if (!signature || !key) {
    return false;
  }
  const expected = await hmacHex(
    key,
    typeof payload === "string" ? encoder.encode(payload) : payload,
  );
  return timingSafeEqual(expected, signature.trim().toLowerCase());
}

function envSecret(): string {
  const env = (globalThis as {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env;
  return env?.[WEBHOOK_SECRET_ENV_VAR] ?? "";
}

async function hmacHex(secret: string, payload: Uint8Array): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new Uint8Array(payload));
  return Array.from(
    new Uint8Array(signature),
    (byte) => byte.toString(16).padStart(2, "0"),
  ).join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let difference = 0;
  for (let i = 0; i < a.length; i++) {
    difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return difference === 0;
}

function readHeader(request: WebhookRequest, name: string): string | undefined {
  if (request instanceof Request || request.headers instanceof Headers) {
    const headers = request instanceof Request ? request.headers : request.headers as Headers;
    return headers.get(name) ?? undefined;
  }
  const value = request.headers[name] ?? request.headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}

async function readBody(request: WebhookRequest): Promise<Uint8Array> {
  if (request instanceof Request) {
    return new Uint8Array(await request.clone().arrayBuffer());
  }
  const { body } = request;
  if (body === undefined || body === null) {
    return readStream(request);
  }
  if (typeof body === "string") {
    return encoder.encode(body);
  }
  if (body instanceof Uint8Array) {
    return body;
  }
  if (body instanceof ArrayBuffer) {
    return new Uint8Array(body);
  }
  if (ArrayBuffer.isView(body)) {
    return new Uint8Array(body.buffer, body.byteOffset, body.byteLength);
  }
  if (body instanceof Blob || body instanceof ReadableStream) {
    return new Uint8Array(await new Response(body).arrayBuffer());
  }
  throw new TypeError(
    "validateWebhook needs the raw request body, but it was already parsed. "
      + "Use express.raw({ type: \"application/json\" }) on the webhook route, "
      + "or `export const config = { api: { bodyParser: false } }` in the Next.js Pages Router.",
  );
}

async function readStream(
  request: Exclude<WebhookRequest, Request>,
): Promise<Uint8Array> {
  const iterate = request[Symbol.asyncIterator];
  if (!iterate) {
    throw new TypeError("validateWebhook: the request has no body.");
  }
  const chunks: Uint8Array[] = [];
  for await (const chunk of { [Symbol.asyncIterator]: iterate.bind(request) }) {
    chunks.push(typeof chunk === "string" ? encoder.encode(chunk) : chunk);
  }
  const bytes = new Uint8Array(chunks.reduce((n, c) => n + c.byteLength, 0));
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}
