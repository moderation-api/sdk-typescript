import * as crypto from 'crypto';

/**
 * The webhook types.
 */
export enum WebhookType {
  QUEUE_ITEM_NEW = 'QUEUE_ITEM_NEW',
  QUEUE_ITEM_ACTION = 'QUEUE_ITEM_ACTION',
  QUEUE_ITEM_COMPLETED = 'QUEUE_ITEM_COMPLETED',
}

/**
 * The webhook payload.
 */
export type WebhookPayload = {
  id: string;
  type: WebhookType;
  timestamp: number;
  item: {
    id: string;
    flagged: boolean;
    labels: {
      label: string;
      score: number;
      flagged: boolean;
      manual: boolean;
    }[];
    language: string;
    content: string;
    timestamp: number;
    metadata?: Record<string, any>;
    contextId?: string;
    authorId?: string;
  };
  queue?: {
    id: string;
    name: string;
  };
  action?: {
    id: string;
    key: string;
    name: string;
    value: string;
  };
};

/**
 * Verifies the signature of a webhook payload and returns the payload if it's valid.
 * @param webhookRawBody - The raw body of the webhook request.
 * @param webhookSignatureHeader - The signature header of the webhook request.
 * @param webhookSecret - The secret used to sign the webhook request. If not provided, falls back to MODAPI_WEBHOOK_SECRET environment variable. Find this in your webhook settings.
 * @returns The payload of the webhook request if the signature is valid.
 * @throws An error if the signature is invalid.
 */
const constructEvent = (
  webhookRawBody: Buffer,
  webhookSignatureHeader: string,
  webhookSecret?: string,
): WebhookPayload => {
  // Resolve the webhook secret from parameter or environment variable
  const secret = webhookSecret || process.env['MODAPI_WEBHOOK_SECRET'];

  if (!secret) {
    throw new Error(
      'Webhook secret is required. Provide it as a parameter or set the MODAPI_WEBHOOK_SECRET environment variable.',
    );
  }

  const rawBody = webhookRawBody.toString('utf8');

  // The signature provided by Moderation API
  const signature = Buffer.from(webhookSignatureHeader, 'utf8');

  if (signature.length > 0) {
    const digest = Buffer.from(crypto.createHmac('sha256', secret).update(rawBody).digest('hex'), 'utf8');

    // Compare the provided signature to the one we generated
    const isValid = signature.length == digest.length && crypto.timingSafeEqual(signature, digest);

    if (!isValid) {
      throw new Error(`Request body digest (${digest}) did not match modapi-signature (${signature})`);
    }
  }

  const payload = JSON.parse(rawBody);

  return payload;
};

export const webhooks = {
  constructEvent,
};
