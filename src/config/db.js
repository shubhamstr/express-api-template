import mongoose from "mongoose"
import { config } from "./env.js"

export async function connectDB() {
  try {
    await mongoose.connect(config.mongoUri, {
      // options can be added here if needed
    })
    console.log("✅ Connected to MongoDB")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message)
    throw err
  }
}
