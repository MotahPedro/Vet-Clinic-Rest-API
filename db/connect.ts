import mongoose, {ConnectOptions} from 'mongoose'

const connectDB = (url:string|undefined = process.env.MONGO_URL): Promise<typeof mongoose> => {
   if(!url) {
    throw new Error('url do MongoDB não foi fornecida')
  }

  const options: ConnectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
  return mongoose.connect(url,options)
}
export default connectDB