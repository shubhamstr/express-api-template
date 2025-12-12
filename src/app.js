import express from "express"
import { applySecurity } from "./middleware/security.js"
import { loggerMiddleware } from "./middleware/logger.js"
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js"
import { router as apiRouter } from "./routes/index.js"

export function createApp() {
  const app = express()

  // Body parsing
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Security + logging
  applySecurity(app)
  app.use(loggerMiddleware)

  // API routes (versioned)
  app.use("/api", apiRouter)

  // 404 + error handler
  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
