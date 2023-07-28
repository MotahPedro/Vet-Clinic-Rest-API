import {TutorModel, PetModel} from "../models/clients";
import { Request, Response, NextFunction} from "express";
import {createCustomError} from '../errors/custom-error'

export const getAllTutors = async (req:Request,res:Response)=>{
    try {
        const tutors = await TutorModel.find({})

        const populatedTutors = await TutorModel.populate(tutors, {path: 'pets'})

        res.status(200).json({tutors: populatedTutors})
    } catch (error) {
        res.status(500).json({error:'Erro ao buscar tutores'})
    }
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
    const {tutorid:tutorID}= req.params
    const tutor = await TutorModel.findById(tutorID)

    if(!tutor){
        return next(createCustomError(`Não ha um tutor com id: ${tutorID}`,404))
    }

    const pet = await PetModel.create(req.body)
    tutor.pets.push(pet)
    await tutor.save()

    res.status(201).json({pet})
}

export const updatePet = async (req: Request, res: Response, next: NextFunction) => {
    const { tutorid: tutorID, petid: petID } = req.params;

    try {
        const updatedPet = await PetModel.findOneAndUpdate({ _id: petID }, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedPet) {
            return next(createCustomError(`O tutor selecionado não tem um pet com id:${petID}`, 404));
        }

        const tutor = await TutorModel.findById(tutorID)

        if (tutor) {
            const petToUpdate = tutor.pets.find((pet) => pet._id.equals(petID))

            if (petToUpdate) {
                petToUpdate.name = updatedPet.name
                petToUpdate.species = updatedPet.species
                petToUpdate.carry = updatedPet.carry
                petToUpdate.weigth = updatedPet.weigth
                petToUpdate.date_of_birth = updatedPet.date_of_birth

                await tutor.save()
            }
        }

        res.status(200).json({ pet: updatedPet })
    } catch (error) {
        next(error)
    }
};

export const deletePet = async (req:Request,res:Response,next:NextFunction)=>{
    const {tutorid:tutorID, petid:petID} = req.params

    try {
        const deletePet = await PetModel.findOneAndDelete({_id:petID})

        if(!deletePet){
            return next(createCustomError(`Não ha um pet com o id:${petID} registrado com esse tutor`, 404))
        }

        const tutor = await TutorModel.findById(tutorID)

        if(tutor){
            const petIndex = tutor.pets.findIndex((pet)=> pet._id.equals(petID))

            if (petIndex !== -1) {
                tutor.pets.splice(petIndex, 1)
                await tutor.save()
            }
        }

        res.status(200).json({deletePet})
    } catch (error) {
        next(error)
    }
}