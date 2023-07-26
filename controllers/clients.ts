import TutorModel from "../models/clients";
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