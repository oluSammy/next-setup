import logger from '@/services/logger';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  logger.info('request: ' + JSON.stringify(req.headers));
  logger.error('error: ' + JSON.stringify(req.headers));
  res.status(200).json({ name: 'John Doe' });
}
