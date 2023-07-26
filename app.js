"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./db/connect"));
const clients_1 = __importDefault(require("./routes/clients"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Rotas
app.get('/', (req, res) => {
    res.send('<h1>Veterinary API</h1><a href="/api/v1/clients">clients route</a>');
});
app.use('/api/v1/clients', clients_1.default);
// Rotas de Clientes
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT || 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //connectDB
        yield (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Servidor ativo na porta ${port}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
