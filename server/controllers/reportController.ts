import { Request, Response } from "express"
import { supabase } from '../server.js'

/* 
    @route  GET /api/report
    @desc   getting all reports
*/

interface SupaData {
    data?: any,
    error?: any
}

/* 
    @route  POST /api/report
    @desc   Getting all the reports with a sort specified
*/

interface SupaData {
    data?: any,
    error?: any
}

const getReports = async (req: Request, res: Response) => {
    console.log(req.body)
    const category: string = req.body.category
    const sortType: string = req.body.sortType
    const sortBy: string = req.body.sortBy

    let asc: boolean = true
    let data: SupaData = { data: null, error: null }

    if (sortType === "desc") {
        asc = false
    }

    if (category === "tools") {
        data = await supabase.from('report').select('*').not('tool_id', 'is', null).order(sortBy, { ascending: asc }) // Match reposupabarts that have a tool_id
    } else if (category === "general") {
        data = await supabase.from('report').select('*').is('tool_id', null).order(sortBy, { ascending: asc }) // Match reports that do not have a tool_id
    } else {
        return res.json({ error: "Error: Proper sorting type not specified." })
    }

    if (data.error) {
        res.json(data.error)
        return
    }

    res.json(data.data)
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
            imageurl: req.body.imageurl,
            user_id: req.body.user_id,
            tool_id: req.body.tool_id
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

/* 
    @route  POST /api/report/upload
    @desc   Upload an image to the report image storage
*/

interface RequestWithFile extends Request {
    file?: any
}

const uploadImage = async (req: RequestWithFile, res: Response) => {
    // Get the uploaded file
    const file: any = req.file;

    const filename: string = Date.now() + '-' + file.originalname

    // Upload the file to Supabase storage
    supabase.storage.from('reportimages').upload(filename, file.buffer)
        .then(response => {
            // File uploaded successfully, do something with the response
            //console.log(response);
            const url = supabase.storage.from('reportimages').getPublicUrl(filename)
            res.json({url})
        })
        .catch(error => {
            // Handle error
            console.error(error);
            res.status(500).send('Failed to upload file');
        });

    
}

export {
    getReports,
    getReport,
    createReport,
    uploadImage,
    deleteReport
}
