// pages/api/upload.js
import { NextApiRequest,NextApiResponse } from 'next';
import Error from 'next/error';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: './public/uploads',
      keepExtensions: true,
    });

    form.parse(req, (err:Error, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const oldPath = files.file.path;
      const newPath = `./public/uploads/logo`;

      // Move the file
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error moving file:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        res.status(200).json({ message: 'File uploaded successfully' });
      });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
