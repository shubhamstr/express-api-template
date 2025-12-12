import { Router } from "express"
import { healthRouter } from "./health.js"
import { usersRouter } from "./user.js"

export const router = Router()

// v1 routes
const v1 = Router()
v1.use(healthRouter)
v1.use("/users", usersRouter)

router.use("/v1", v1)
