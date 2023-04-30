import express from "express";
import { getAllBookings, getSingleBooking, createBooking, getBookingsWithToolName, deleteBooking, getUserBookings, getToolBookingsByDate } from '../controllers/bookingController.js';

const bookingRouter = express()

bookingRouter.route('/')
    .get(getAllBookings)
    .post(createBooking)

    bookingRouter.route('/bookingwithtoolname')
    .get(getBookingsWithToolName)

bookingRouter.route('/:id')
    .get(getSingleBooking)
    .delete(deleteBooking)


bookingRouter.get('/:toolid/:date', getToolBookingsByDate)

bookingRouter.get('/user/:userId', getUserBookings)

export { bookingRouter }