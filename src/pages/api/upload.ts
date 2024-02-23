import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { connectDB, disconnectDB } from '@/db';
import mongoose, { Document, Model, Schema } from 'mongoose';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model('Image', imageSchema);

export const config = {
  api: {
    bodyParser: false,
  },
};

// export default upload.single('file')(async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { originalname, buffer, mimetype } = req.file;
//       const image = new Image({
//         name: originalname,
//         data: buffer,
//         contentType: mimetype,
//       });

//       await image.save();
//       res.status(200).json({ message: 'File uploaded successfully' });
//     } catch (error) {
//       console.error('Error saving file to MongoDB:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const images = await Image.find({}, 'name contentType');
//       res.status(200).json({ images });
//     } catch (error) {
//       console.error('Error retrieving files from MongoDB:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// });
