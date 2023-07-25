require('dotenv').config()
require('express-async-errors')
import {Request, Response, Express} from 'express'

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const clientsRouter = require('./routes/clients')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.json())

// Rotas
app.get('/', (req:Request,res:Response)=>{
    res.send('<h1>Veterinary API</h1><a href="/api/v1/clients">clients route</a>')
})

app.use('/api/v1/clients', clientsRouter)

// Rotas de Clientes
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async() =>{
    try {
        //connectDB
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Servidor ativo na porta ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()