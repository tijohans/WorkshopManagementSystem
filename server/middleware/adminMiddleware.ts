import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import 'dotenv/config'
import { supabase } from "../server.js";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

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