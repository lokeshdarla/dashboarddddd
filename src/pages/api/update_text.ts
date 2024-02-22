import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const greetingsFilePath = path.join(process.cwd(), 'greetings.json');
      const greetingsData = await fs.readFile(greetingsFilePath, 'utf-8');
      const greetings = JSON.parse(greetingsData);
      const data = { greetings };
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { text } = req.body;
      const greetingsFilePath = path.join(process.cwd(), 'greetings.json');
      const updatedData = { text };
      const updatedDataString = JSON.stringify(updatedData, null, 2);
      await fs.writeFile(greetingsFilePath, updatedDataString, 'utf-8');
      res.status(201).json(updatedData);
    } catch (error) {
      console.error('Error updating the text:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
