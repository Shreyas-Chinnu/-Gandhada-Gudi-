import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle fetching movie data here
  res.status(200).json({ message: 'Movies API' });
}
