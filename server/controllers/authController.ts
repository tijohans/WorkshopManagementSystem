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

    const oldUser = await supabase
        .from('users')
        .select('email')
        .eq('email', req.body.email)
    
    console.log(oldUser)

    if(oldUser)
        return res.status(400).json({error: 'User already registered with that email'})

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

    res.json(data).status(200)
}

/*  
    @route  POST /api/users/login
    @desc   Route for logging in users
*/
const loginUser = async (req: Request, res: Response) => {

    // Getting the email, and the password from the request body
    const {email, password} = req.body

    // Getting the user from the db, based on the email
    const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
    
    // Returning if an error occurs
    if(error) 
        return res.status(400).json({error: error})

    // Setting the user to the first index of the data, since supabase returns an array of objects
    const user = data[0]

    if(!user)
        return res.status(400).json({error: 'Username or password incorrect'})

    // Comparing the password sent from the user with the one in the database
    const correctPassword = await bcrypt.compare(password, user.password)

    // Checking if either the user, or if the password is incorrect
    if(!user || !correctPassword) {
        res.status(400).json({error: 'Username or password incorrect'})
        return
    }

    // Signing a JWT with the user id, JWT_SECRET, and that it expires in 7 days
    const token = 'Bearer ' + jwt.sign({sub: user.id}, String(process.env.JWT_SECRET), {expiresIn: '7d'})
    
    // Finally sending the token back to the request origin
    res.status(200).send({token})
}

export {
    registerUser, 
    loginUser
}