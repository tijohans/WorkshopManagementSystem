import { Request, Response } from "express"
import { supabase } from '../server.js'

/* 
    @route  GET /api/tools
    @desc   getting all tools
*/
const getTools = async (req: Request, res: Response) => {
    const {data: data, error} = await supabase.from('tools').select('*')

    if(error) {
        res.json(error)
        return
    }
        

    res.json(data)
}

/* 
    @route  POST /api/tools
    @desc   creating new tool
*/
const createTools = async (req: Request, res: Response) => {

    const {data, error} = await supabase
        .from('tools')
        .insert([{
            name: req.body.name,
            imageurl: req.body.imageurl,
            description: req.body.description,
        }])
        .select()

    if(error) {
        res.json(error)
        return
    }

    res.json(data)
}


/* 
    @route  GET /api/tools/:id
    @desc   getting a single tool
*/
const getTool = async (req: Request, res: Response) => {
    const id = req.params.id

    const {data: data, error} = await supabase
        .from('tools')
        .select('*')
        .eq('id', id)

    if(error) {
        res.json(error)
        return
    }

    res.json(data)
}


/* 
    @route  PATCH /api/tools/:id
    @desc   creating a new tool
*/
const updateTools = async (req: Request, res: Response) => {
    
    const id = req.params.id
    const field = req.body.field
    const value = req.body.value

    if(!field || !value) {
        res.json("Missing or incorrect field name/value")
        return
    }
    
    const { data, error } = await supabase
        .from('tools')
        .update({ [field]: value })
        .eq('id', id)
        .select()

    if(error) {
        res.json(error)
        return
    }

    res.json(data)
}

/* 
    @route  /api/tools/:id
    @desc   deleting a tool
*/
const deleteTools = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data, error } = await supabase
        .from('tools')
        .delete()
        .eq('id', id)
        .select()
    
    if(error) {
        res.json(error)
        return
    }

    res.json(data)
}

export {
    getTools,
    createTools,
    getTool,
    updateTools,
    deleteTools
}