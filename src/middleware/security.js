import helmet from "helmet"
import cors from "cors"
import compression from "compression"
import rateLimit from "express-rate-limit"

export function applySecurity(app) {
  app.use(helmet())
  app.use(cors({ origin: "*" }))
  app.use(compression())

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })

  app.use("/api", limiter)
}
