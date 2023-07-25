import mongoose, {ConnectOptions} from 'mongoose'

export const connectDB = (url:string): Promise<typeof mongoose> => {
  const options: ConnectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
  return mongoose.connect(url,options)
}
