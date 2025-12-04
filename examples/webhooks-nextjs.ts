// @ts-nocheck
// Next.js API route example for handling webhooks
import { webhooks } from '@moderation-api/sdk';
import { buffer } from 'micro';

const handler = async (req, res) => {
  const webhookRawBody = await buffer(req);
  const webhookSignatureHeader = req.headers['modapi-signature'];

  // Make sure that you've set the MODAPI_WEBHOOK_SECRET environment variable
  const payload = await webhooks.constructEvent(webhookRawBody, webhookSignatureHeader);
};

// disable body parser so we can access raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
