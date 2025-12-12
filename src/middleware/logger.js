import morgan from "morgan"
import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"
import path from "path"
import fs from "fs"

// Create logs directory if missing
const logDir = path.join(process.cwd(), "logs")
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

// Winston Logger Configuration
export const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),

  transports: [
    // DAILY FILE ROTATION (app logs)
    new DailyRotateFile({
      filename: path.join(logDir, "app-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "30d", // keep logs for 30 days
    }),

    // DAILY FILE ROTATION (error logs)
    new DailyRotateFile({
      filename: path.join(logDir, "error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "error",
      maxSize: "10m",
      maxFiles: "60d",
    }),
  ],
})

// Show console logs only during development
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  )
}

// Morgan → Winston stream (HTTP logs)
const morganStream = {
  write: (message) => logger.info(message.trim()),
}

export const loggerMiddleware = morgan("combined", { stream: morganStream })
