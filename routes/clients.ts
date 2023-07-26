import express, {Router} from "express"
import {deleteTutor, getAllTutors,registerTutor, updateTutor} from '../controllers/clients'

const clientsRouter: Router = express.Router()

//Routes
clientsRouter.route('/tutors').get(getAllTutors)
clientsRouter.route('/tutor/:id').post(registerTutor).put(updateTutor).delete(deleteTutor)


export default clientsRouter