"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clients_1 = require("../controllers/clients");
const clientsRouter = express_1.default.Router();
//Routes
clientsRouter.route('/').get(clients_1.getAllTutors).post(clients_1.registerTutor);
exports.default = clientsRouter;
