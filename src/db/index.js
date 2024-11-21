import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log(`Connecting to: ${process.env.MONOGODB_URI}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONOGODB_URI.trim()}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection Failed: ", error);
        process.exit(1);
    }
};

export default connectDB;
