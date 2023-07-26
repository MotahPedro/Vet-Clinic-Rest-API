import express, {Router} from "express"
import {deleteTutor, getAllTutors,registerTutor, updateTutor, registerPet, updatePet} from '../controllers/clients'

const clientsRouter: Router = express.Router()

//Routes
clientsRouter.route('/tutors').get(getAllTutors)
clientsRouter.route('/tutor/:id').post(registerTutor).put(updateTutor).delete(deleteTutor)
clientsRouter.route('/pet/:tutorid').post(registerPet)
clientsRouter.route('/pet/tutor/tutorid').put(updatePet)


export default clientsRouter