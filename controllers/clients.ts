import TutorModel from "../models/clients";
import { Request, Response} from "express";

export const getAllTutors = async (req:Request,res:Response)=>{
    const tutors = await TutorModel.find({})
    res.status(200).json({tutors})
}

export const registerTutor = async(req:Request,res:Response)=>{
    const tutor = TutorModel.create(req.body)
    res.status(201).json({tutor})
}