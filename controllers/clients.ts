import {TutorModel, PetModel} from "../models/clients";
import { Request, Response, NextFunction} from "express";
import {createCustomError} from '../errors/custom-error'

export const getAllTutors = async (req:Request,res:Response)=>{
    const tutors = await TutorModel.find({})
    res.status(200).json({tutors})
}

export const registerTutor = async(req:Request,res:Response)=>{
    const tutor = await TutorModel.create(req.body)
    res.status(201).json({tutor})
}

export const updateTutor = async (req:Request,res:Response, next:NextFunction)=>{
    const {id:tutorID} = req.params
    const tutor = await TutorModel.findOneAndUpdate({_id:tutorID}, req.body,{
        new: true,
        runValidators: true
    })
    if(!tutor){
        return next(createCustomError(`Não ha tutores com id: ${tutorID}`,404))
    }
    res.status(200).json({tutor})
}

export const deleteTutor = async (req:Request,res:Response,next:NextFunction)=>{
    const {id:tutorID} = req.params
    const tutor = await TutorModel.findOneAndDelete({_id:tutorID})
    if(!tutor){
        return next(createCustomError(`Não ha tutores com id: ${tutorID}`,404))
    }
    res.status(200).json({tutor})
}

export const registerPet = async (req:Request,res:Response, next:NextFunction)=>{
    const {tutorID}= req.params
    const tutor = await TutorModel.findById(tutorID)

    if(!tutor){
        return next(createCustomError(`Não ha um tutor com id: ${tutorID}`,404))
    }

    const pet = await PetModel.create(req.body)
    tutor.pets.push(pet)
    await tutor.save()

    res.status(201).json({pet})
}

export const updatePet = async (req:Request,res:Response,next:NextFunction)=>{
    const {id:tutorID} = req.params
    const tutor = await TutorModel.findById(tutorID)
    const {pid:petID} = req.params
    const pet = await PetModel.findOneAndUpdate({_pid:petID}, req.body,{
        new: true,
        runValidators: true
    })
    if (!pet){
        return next(createCustomError(`O tutor selecionado não tem um pet com id:${petID}`, 404))
    }
    else if(!tutor){
        return next(createCustomError(`Não ha um tutor com id:${tutorID}`, 404))
    }
    res.status(200).json({tutor})
}

// A forma de validação da existencia de tutor e pet do deletePet atualmente é mais efetiva que a do updatePet. Averiguação assim que tutor é inserido.
export const deletePet = async (req:Request,res:Response,next:NextFunction)=>{
    const {id:tutorID} = req.params
    const tutor = await TutorModel.findById(tutorID)

    if(!tutor){
        return next(createCustomError(`Não ha um tutor com id ${tutorID}`, 404))
    }

    const {pid:petID} = req.params
    const pet = await PetModel.findOneAndDelete({_pid:petID})

    if(!pet){
        return next(createCustomError(`Não ha um pet com o id:${petID} registrado com esse tutor`, 404))
    }
}

// Obrigado por averiguar meu código :)