import { Request, Response } from "express"
import { supabase } from "../server.js"


/* 
    @route  GET /api/bookings
    @desc   get all bookings
*/
const getAllBookings = async (req: Request, res: Response) => {
    
    const { data: data, error } = await supabase.from('bookings').select('*')

    if (error) 
        return res.json(error)

    res.json(data)
}


/* 
    @route  GET /api/bookings/:id
    @desc   get a specific booking
*/
const getSingleBooking = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data: data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('booking_id', id)

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

/* 
    @route  GET /api/bookings/user/:userid
    @desc   get all bookings from a user
*/
const getUserBookings = async (req: Request, res: Response) => {
    const { data: data, error } = await supabase.from('bookings').select('*').eq('user_id', req.params.userId)

    if (error) 
        return res.json(error)

    res.json(data)
}


/* 
    @route  GET /api/bookings/:id/:date
    @desv   get all bookings from a single date
*/
const getToolBookingsByDate = async (req: Request, res: Response) => {
    const { data: data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('tool_id', req.params.id)
        .eq('booking_date', req.params.date)

    if (error) 
        return res.json(error)

    res.json(data)
}

/* 
    @route  POST /api/bookings
    @desc   Create a new booking
*/
const createBooking = async (req: Request, res: Response) => {
    const { data: bookings_data, error: bookings_error } = await supabase
        .from('bookings')
        .insert([{
            user_id: req.body.user_id,
            tool_id: req.body.tool_id,
            booking_date: req.body.booking_date,
            booking_start: req.body.booking_start,
            booking_end: req.body.booking_end
        }])
        .select()
        
    // TODO: Need to add the timestamp of creation for the booking, also should have the same id as the original booking
    const { data: log_data, error: log_error } = await supabase
        .from('booking_log')
        .insert([{
            user_id: req.body.user_id,
            tool_id: req.body.tool_id,
            booking_date: req.body.booking_date,
            booking_start: req.body.booking_start,
            booking_end: req.body.booking_end
        }])
        .select()
         

    if (bookings_error || log_error) 
        return bookings_error ? res.json(bookings_error) : res.json(log_error)
    

    res.json(bookings_data)
}

/* 
    @route  DELETE /api/bookings/:id
    @desc   delete a specific booking
*/
const deleteBooking = async (req: Request, res: Response) => {
    const id = req.params.id

    const { data, error } = await supabase
        .from('bookings')
        .delete()
        .eq('booking_id', id)
        .select()

    if (error) {
        res.json(error)
        return
    }

    res.json(data)
}

export {
    getAllBookings, 
    getSingleBooking,
    getUserBookings,
    createBooking,
    deleteBooking,
    getToolBookingsByDate
}