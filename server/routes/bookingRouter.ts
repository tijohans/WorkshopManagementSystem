import express from "express";
import { getAllBookings, getSingleBooking, createBooking, deleteBooking, getUserBookings, getToolBookingsByDate } from '../controllers/bookingController.js';

const bookingRouter = express()

bookingRouter.route('/')
    .get(getAllBookings)
    .post(createBooking)

bookingRouter.route('/:id')
    .get(getSingleBooking)
    .delete(deleteBooking)

bookingRouter.get('/:id/:date', getToolBookingsByDate)

bookingRouter.get('/user/:userId', getUserBookings)

export { bookingRouter }