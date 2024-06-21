import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://krishna:krishna123@cluster0.9dcqd2t.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(uri);

    console.log("DB Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to database: ", error.message); // Use error.message for clarity
  }
};
