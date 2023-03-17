import { Request, Response } from "express"
import { supabase } from '../server.js'
import bcrypt from 'bcryptjs'

/* 
    @route  GET /api/users
    @desc   getting all users
*/
const getUsers = async (req: Request, res: Response) => {
    const { data: data, error } = await supabase.from('users').select('*')

    if (error) {
        res.json(error)
        return
    }


    res.json(data)
}

/* 
    @route  POST /api/users
    @desc   creating new user
*/
const createUsers = async (req: Request, res: Response) => {

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
    @route  GET /api/tools/:id
    @desc   getting a single tool
*/
const getUser = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data: data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}


/* 
    @route  PATCH /api/users/:id
    @desc   Updating a user
*/
const updateUser = async (req: Request, res: Response) => {

    const id = req.params.id
    //const field = req.body.field
    //const value = req.body.value

    // Siden .update tar inn et objekt, har jeg en ide at vi bare henter body som et objekt, også oppdaterer den fieldsa funnet i body ? 

    if (!req.body) {
        res.json("Missing input")
        return
    }

    const { data, error } = await supabase
        .from('users')
        .update(req.body)
        .eq('id', id)
        // .match isteden kanskje ?
        //.match({ id: id })

        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

/* 
    @route  /api/tools/:id
    @desc   deleting a tool
*/
const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', id)
        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

export {
    getUsers,
    createUsers,
    getUser,
    updateUser,
    deleteUser
}