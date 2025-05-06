import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle authentication here
  res.status(200).json({ message: 'Auth API' });
}
