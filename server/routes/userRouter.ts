import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const userRouter = express()

// Middleware for checking if user is logged in, and is admin
userRouter.use(authMiddleware)

userRouter.route('/')
    .get(getUsers)

userRouter.route('/:id')
    .get(getUser)
    .patch(adminMiddleware, updateUser)
    .delete(adminMiddleware, deleteUser)

export { userRouter }