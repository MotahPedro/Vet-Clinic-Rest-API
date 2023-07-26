import 'express-async-errors'
import {Request, Response} from 'express'
import express, { Express } from "express"
import connectDB from './db/connect'
import clientsRouter from './routes/clients'
import errorHandlerMiddleware from './middleware/error-handler'
import notFoundMiddleware from './middleware/not-found'

import dotenv from 'dotenv'

dotenv.config()
const app : Express = express()

// Middleware
app.use(express.json())


app.get('/', (req:Request,res:Response)=>{
    res.send('<h1>Veterinary API</h1><a href="/api/v1/clients">clients route</a>')
})

// Rotas
app.use('/api/v1/clients', clientsRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async() =>{
    try {
        //connectDB
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=> console.log(`Servidor ativo na porta ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()