import { Request, Response } from "express"
import { supabase } from '../server.js'

/* 
    @route  GET /api/report
    @desc   getting all reports
*/
const getReports = async (req: Request, res: Response) => {
    const { data: data, error } = await supabase.from('report').select('*')

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

/*
     @route POST/api/report
     @desc creating a report
*/

const createReport = async (req: Request, res: Response) => {

    const { data, error } = await supabase
        .from('report')
        .insert([{
            title: req.body.title,
            description: req.body.description,
            important: req.body.important,
        }])
        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}


/* 
    @route  GET /api/report/:id
    @desc   getting a specific report
 */

const getReport = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data: data, error } = await supabase
        .from('report')
        .select('*')
        .eq('report_id', id)

    if (error) {
        res.json(error)
        return
    }
    res.json(data)
}


/* 
    @route  /api/report/:id
    @desc   deleting a report */

const deleteReport = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data, error } = await supabase
        .from('report')
        .delete()
        .eq('report_id', id)
        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
  
}


export {
    getReports,
    createReport,
    getReport,
    deleteReport
   
}