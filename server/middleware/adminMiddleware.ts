import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import 'dotenv/config'
import { supabase } from "../server.js";

interface RequestWithToken extends Request {
    body: {
        token?: string
    }

    query: {
        token?: string
    }

    verified?: string | JwtPayload
}

const verifyToken = async (req: RequestWithToken, res: Response, next: NextFunction) => {
    const errorMessage = {error: "Not authorized to access this content"}

    // Checking for JWT in any of these three locations
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    console.log(token)

    const decoded = jwt.verify(String(token), String(process.env.JWT_SECRET));

    const user = await supabase
        .from('users')
        .select('role')
        .eq('id', decoded.sub)
    
    /* 
        Checking if user.data exist, 
        if so setting the user role to the role of the user, 
        else defaults to 2, which is basic user  
    */
    const userRole = user.data ? user.data[0].role : 2;

    // Checking if the user role is admin (1)
    if(userRole != 1) 
        return res.status(403).json({err: "Not authorized"})
        
    next()
};

export default verifyToken;