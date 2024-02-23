import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB, disconnectDB } from '@/db';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface GreetingDocument extends Document {
  greeting: string;
}

const greetingSchema = new mongoose.Schema({
  greeting: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const GreetingModel = mongoose.models.Greeting || mongoose.model<GreetingDocument>('Greeting', greetingSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let dbClient;

  try {
    if (!req || !req.method) {
      throw new Error('Invalid request object');
    }

    dbClient = await connectDB();

    if (req.method === 'GET') {
      const lastUploadedGreeting = await GreetingModel.findOne({}, {}, { sort: { updatedAt: -1 } });
      res.status(200).json({lastUploadedGreeting });
    } else if (req.method === 'POST') {
      const { greeting } = req.body;
      const newGreeting = new GreetingModel({ greeting });
      await newGreeting.save();
      res.status(201).json({ message: 'Greeting saved successfully', savedData: req.body });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
      await disconnectDB();
  }
}
