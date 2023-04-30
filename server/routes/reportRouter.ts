import express from 'express'
import {  getReports,
    createReport,
    getReport,
    deleteReport} from '../controllers/reportController.js'


const reportRouter = express()

//createReport, getReport, deleteReport

reportRouter.route('/')
    .get(getReports)

    reportRouter.route('/')
     .post(createReport)


reportRouter.route('/:id')
    .get(getReport)
   .delete(deleteReport)

export { reportRouter }