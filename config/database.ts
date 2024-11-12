import mongoose from "mongoose";
const link = process.env.database as string;
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(link);
    console.log("mongodb connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
