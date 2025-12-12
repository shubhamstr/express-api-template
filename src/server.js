import http from "http"
import { config } from "./config/env.js"
import { connectDB } from "./config/db.js"
import { createApp } from "./app.js"

const PORT = config.port

async function start() {
  try {
    await connectDB()
    const app = createApp()
    const server = http.createServer(app)

    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error("❌ Failed to start server", err)
    process.exit(1)
  }
}

start()
