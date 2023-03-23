import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import { supabase } from '../server.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

/* 
    @route  POST /api/users/register
    @desc   creating new user
*/
const registerUser = async (req: Request, res: Response) => {

    const password = await bcrypt
        .genSalt(10)
        .then((salt: string) => {
            return bcrypt.hash(req.body.password, salt)
        })
        .catch((err: { message: any }) => console.error(err.message))

    const { data, error } = await supabase
        .from('users')
        .insert([{
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: password
        }])
        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

/*  
    @route  POST /api/users/login
    @desc   Route for loggin in users
*/
const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body

    const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
    
    if(error) {
        res.json({err: error})
        return
    }

    const user = data[0]

    const correctPassword = await bcrypt.compare(password, user.password)

    if(!user || !correctPassword) {
        res.status(400).json({msg: 'Username of password incorrect'})
        return
    }

    const token = jwt.sign({sub: user.id}, String(process.env.JWT_SECRET), {expiresIn: '7d'})
    

    res.status(200).send({userId: user.id, token})
}

export {
    registerUser, 
    loginUser
}