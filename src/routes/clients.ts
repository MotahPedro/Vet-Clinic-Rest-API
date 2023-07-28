import express, {Router} from "express"
import {deleteTutor, getAllTutors,registerTutor, updateTutor, registerPet, updatePet, deletePet} from '../controllers/clients'

const clientsRouter: Router = express.Router()

//Routes
clientsRouter.route('/tutors').get(getAllTutors)
clientsRouter.route('/tutor').post(registerTutor)
clientsRouter.route('/tutor/:id').put(updateTutor).delete(deleteTutor)
clientsRouter.route('/pet/:tutorid').post(registerPet)
clientsRouter.route('/pet/:petid/tutor/:tutorid').put(updatePet).delete(deletePet)

export default clientsRouter