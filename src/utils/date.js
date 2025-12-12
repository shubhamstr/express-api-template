import moment from "moment-timezone"
import { config } from "../config/env.js"

// Format a date in UTC
export const formatUTC = (date) => {
  return moment(date).utc().format("YYYY-MM-DD HH:mm:ss")
}

// Convert to configured timezone (Asia/Kolkata by default)
export const formatLocal = (date) => {
  return moment(date).tz(config.displayTimezone).format("YYYY-MM-DD HH:mm:ss")
}

// ISO timestamps always in UTC
export const isoUTC = (date) => {
  return moment(date).utc().toISOString()
}

// Relative time from now (UTC-based)
export const fromNowUTC = (date) => {
  return moment.utc(date).fromNow()
}
