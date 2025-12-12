import dotenv from "dotenv"
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 6000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",
  displayTimezone: process.env.DISPLAY_TIMEZONE || "UTC",
}
