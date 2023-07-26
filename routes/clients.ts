import express, {Router} from "express"
import {getAllTutors,registerTutor} from '../controllers/clients'

const clientsRouter: Router = express.Router()

//Routes
clientsRouter.route('/').get(getAllTutors).post(registerTutor)


export default clientsRouter