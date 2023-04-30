import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import 'dotenv/config'

interface RequestWithToken extends Request {
    body: {
        token?: string
    }

    query: {
        token?: string
    }

    verified?: string | JwtPayload
}

const verifyToken = (req: RequestWithToken, res: Response, next: NextFunction) => {
    const errorMessage = {error: "Not authorized to access this content"}

    // Checking for JWT in any of these three locations
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    // If no token is present return error
    if (!token) 
        return res.status(401).json(errorMessage)

    try {
        const decoded = jwt.verify(String(token), String(process.env.JWT_SECRET))
        req.verified = decoded
        next()
    } catch (err) {
        return res.status(401).json(errorMessage)
    }
};

export default verifyToken;