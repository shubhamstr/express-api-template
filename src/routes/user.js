import { Router } from "express"
import { userController } from "../controllers/user.controller.js"

export const usersRouter = Router()

usersRouter.get("/", userController.getUsers)
