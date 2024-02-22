import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body;
      const formsPath = path.join(process.cwd(), 'forms.json');
      const formsData = JSON.parse(fs.readFileSync(formsPath, 'utf-8'));
      formsData.push(formData);
      fs.writeFileSync(formsPath, JSON.stringify(formsData, null, 2));

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
