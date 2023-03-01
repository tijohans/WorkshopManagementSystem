import express from 'express'
import {getTools, createTools, getTool, updateTools, deleteTools} from '../controllers/toolController.js'

const toolRouter = express()

toolRouter.route('/')
    .get(getTools)
    .post(createTools)

toolRouter.route('/:id')
    .get(getTool)
    .patch(updateTools)
    .delete(deleteTools)

export { toolRouter }