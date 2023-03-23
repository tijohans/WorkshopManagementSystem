import express from "express";
import { registerUser, loginUser } from "../controllers/authController";

const authRouter = express()

authRouter.post('/register', registerUser)

authRouter.post('/login', loginUser)

export { authRouter }