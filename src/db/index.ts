// db.ts
import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const DB_NAME = 'dashboard';
    const db = await mongoose.connect(`${process.env.NEXT_MONGO_URI}/${'dashboarddd'}`);
    console.log(`\n MongoDB connected !! DB HOST: ${db.connection.host}`);
    isConnected = true;
  } catch (error) {
    console.log("MONGODB Connection ERROR: ", error);
    isConnected = false;
    throw error;
  }
}

const disconnectDB = async () => {
  if (!isConnected) {
    return;
  }

  await mongoose.disconnect();
  console.log('MongoDB disconnected');
  isConnected = false;
}

export { connectDB, disconnectDB };
