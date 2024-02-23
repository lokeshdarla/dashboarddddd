// api/email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB, disconnectDB } from '@/db';
import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the interface for the Email document
interface EmailDocument extends Document {
  name: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  message: string;
}

// Define the interface for the Email model
interface EmailModel extends Model<EmailDocument> {}

// Define the Mongoose schema for the email collection
const emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'success', 'failed'],
    default: 'pending',
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

let EmailModel: EmailModel;
try {
  EmailModel = mongoose.model<EmailDocument, EmailModel>('Email', emailSchema);
} catch (error) {
  EmailModel = mongoose.model<EmailDocument, EmailModel>('Email');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  try {
    if (!req || !req.method) {
      throw new Error('Invalid request object');
    }

    if (req.method === 'GET') {
      const emails = await EmailModel.find({});
      res.status(200).json({emails });
      
    } 
    else if (req.method === 'POST') {
      const { name, email, message } = req.body;
      const newEmail = new EmailModel({ name, email, message });
      await newEmail.save();
      console.log("Email Saved Successfullly");
      res.status(201).json({ message: 'Email saved successfully', savedData: req.body });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  finally{
    await disconnectDB();
  }
}
