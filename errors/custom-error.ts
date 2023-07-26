class CustomAPIError extends Error {
    public statusCode: number

    constructor(message: string, statusCode: number){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg: string, statusCode: number) =>{
    return new CustomAPIError(msg,statusCode)
}

export {createCustomError, CustomAPIError}