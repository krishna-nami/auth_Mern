import mongoose from "mongoose";
import { config } from "../../config/app.config";

const connectiondb = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Error while connection ", error);
    process.exit(1);
  }
};
export default connectiondb;
