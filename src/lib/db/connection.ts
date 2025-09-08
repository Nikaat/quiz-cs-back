import config from "@/config/base";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mangoURI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    if (error instanceof Error)
      console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};