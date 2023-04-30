import express from "express";
import { getAllBookings, getSingleBooking, createBooking, getBookingsWithToolName, deleteBooking, getUserBookings, getToolBookingsByDate } from '../controllers/bookingController.js';

const bookingRouter = express()

bookingRouter.route('/')
    .get(getAllBookings)
    .post(createBooking)

bookingRouter.route('/:id')
    .get(getSingleBooking)
    .delete(deleteBooking)

// bookingRouter.route('/')


bookingRouter.get('/:toolid/:date', getToolBookingsByDate)

bookingRouter.get('/user/:userId', getUserBookings)

export { bookingRouter }