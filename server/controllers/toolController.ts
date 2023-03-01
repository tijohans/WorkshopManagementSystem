import { Request, Response } from "express"
import { supabase } from '../server.js'

/* 
    @route  GET /api/tools
    @desc   getting all tools
*/
const getTools = async (req: Request, res: Response) => {
    const {data: tools, error} = await supabase.from('tools').select('*')

    if(error) 
        res.json(error)

    res.json(tools)
}

/* 
    @route  POST /api/tools
    @desc   creating new tool
*/
const createTools = async (req: Request, res: Response) => {
    
}


/* 
    @route  GET /api/tools/:id
    @desc   getting a single tool
*/
const getTool = async (req: Request, res: Response) => {
    res.json({msg: 'get a single tool test'})
}


/* 
    @route  PATCH /api/tools/:id
    @desc   creating a new tool
*/
const updateTools = async (req: Request, res: Response) => {
    res.json({msg: 'updating a tool'})
}

/* 
    @route  /api/tools/:id
    @desc   deleting a tool
*/
const deleteTools = async (req: Request, res: Response) => {
    res.json({msg: 'deleting a tool test'})
}

export {
    getTools,
    createTools,
    getTool,
    updateTools,
    deleteTools
}