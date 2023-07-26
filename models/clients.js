"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TutorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    zip_code: { type: String, required: true },
    pets: { type: Array, required: true },
});
const TutorModel = mongoose_1.default.model('Tutor', TutorSchema);
exports.default = TutorModel;
