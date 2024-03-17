import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected successfully to the database: ${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};
export default connectDB;
