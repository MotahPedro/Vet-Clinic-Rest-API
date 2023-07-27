import {Request, Response, NextFunction} from 'express'

const errorHandlerMiddleware = async (err:any, req:Request, res:Response, next:NextFunction)=>{
    console.log(err)
    return res.status(500).json({msg:"Algo deu errado"})
}

export default errorHandlerMiddleware