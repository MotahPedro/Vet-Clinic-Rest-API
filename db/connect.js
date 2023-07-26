"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (url = process.env.MONGO_URL) => {
    if (!url) {
        throw new Error('url do MongoDB não foi fornecida');
    }
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    };
    return mongoose_1.default.connect(url, options);
};
exports.default = connectDB;
