import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const greetingsFilePath = path.join(process.cwd(), 'greetings.json');
      const greetingsData = fs.readFileSync(greetingsFilePath, 'utf-8');
      const greetings = JSON.parse(greetingsData);
      const data = { greetings};
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
