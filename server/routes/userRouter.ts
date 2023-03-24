import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'

const userRouter = express()

userRouter.route('/')
    .get(getUsers)

userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

export { userRouter }