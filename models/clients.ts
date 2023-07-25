import mongoose, {Schema, Document} from 'mongoose'

interface Pets extends Document{
    name: string
    species: string
    carry: string
    weigth: number
    date_if_birth: string
}

interface Tutor extends Document{
    name: string
    phone: string
    email: string
    date_of_birth: string
    zip_code: string
    pets: Pets[]
}

const TutorSchema: Schema<Tutor> = new mongoose.Schema({
    name:{type:String, required: true},
    phone:{type:String, required: true},
    email:{type:String, required: true},
    date_of_birth:{type:String, required: true},
    zip_code:{type:String, required: true},
    pets:{type:Array, required: true},
})

const TutorModel = mongoose.model<Tutor>('Tutor', TutorSchema)

export default TutorModel
