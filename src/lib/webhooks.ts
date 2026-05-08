import * as crypto from 'crypto';
import type { WebhookEvent } from '../resources';

export type { WebhookEvent };

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
): WebhookEvent => {
  const secret = webhookSecret || process.env['MODAPI_WEBHOOK_SECRET'];

  if (!secret) {
    throw new Error(
      'Webhook secret is required. Provide it as a parameter or set the MODAPI_WEBHOOK_SECRET environment variable.',
    );
  }

  const rawBody = webhookRawBody.toString('utf8');

  const signature = Buffer.from(webhookSignatureHeader, 'utf8');

  if (signature.length > 0) {
    const digest = Buffer.from(crypto.createHmac('sha256', secret).update(rawBody).digest('hex'), 'utf8');

    const isValid = signature.length == digest.length && crypto.timingSafeEqual(signature, digest);

    if (!isValid) {
      throw new Error(`Request body digest (${digest}) did not match modapi-signature (${signature})`);
    }
  }

  const payload = JSON.parse(rawBody) as WebhookEvent;

  return payload;
};

export const webhooks = {
  constructEvent,
};
