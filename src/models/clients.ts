import mongoose, {Schema, Document} from 'mongoose'

interface Pets extends Document{
    name: string
    species: string
    carry: string
    weigth: number
    date_of_birth: string
}

interface Tutor extends Document{
    name: string
    phone: string
    email: string
    date_of_birth: string
    zip_code: string
    pets: Pets[]
}

const PetsSchema: Schema<Pets> =  new mongoose.Schema({
    name:{type: String, require:true},
    species:{type: String, require: true},
    carry: {type: String, require: true},
    weigth: {type: Number, require: true},
    date_of_birth: {type: String, require: true}
})

const TutorSchema: Schema<Tutor> = new mongoose.Schema({
    name:{type:String, required: true},
    phone:{type:String, required: true},
    email:{type:String, required: true},
    date_of_birth:{type:String, required: true},
    zip_code:{type:String, required: true},
    pets:{type: [PetsSchema], default: []},
})

export const TutorModel = mongoose.model<Tutor>('Tutor', TutorSchema)
export const PetModel = mongoose.model<Pets>('Pet', PetsSchema)