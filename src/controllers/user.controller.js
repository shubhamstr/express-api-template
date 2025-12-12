import { userService } from "../services/user.service.js"

export const userController = {
  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers()

      res.json({
        success: true,
        data: users,
      })
    } catch (err) {
      next(err) // Pass to errorHandler
    }
  },
}
