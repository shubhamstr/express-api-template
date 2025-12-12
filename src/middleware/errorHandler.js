import { logger } from "./logger.js"

export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
}

export function errorHandler(err, req, res, next) {
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  })

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  })
}
