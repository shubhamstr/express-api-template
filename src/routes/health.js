import { Router } from "express"
import { formatUTC, formatLocal, isoUTC } from "../utils/date.js"
import { config } from "../config/env.js"

export const healthRouter = Router()

healthRouter.get("/health", (req, res) => {
  const now = new Date()

  res.json({
    status: "ok",
    utc_time: formatUTC(now),
    local_time: formatLocal(now),
    iso_utc: isoUTC(now),
    timezone: config.displayTimezone,
  })
})
