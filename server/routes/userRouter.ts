import express from 'express'
import { getUsers, createUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'

const userRouter = express()

userRouter.route('/')
    .get(getUsers)
    .post(createUsers)

userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

export { userRouter }