import {model, Schema} from "mongoose";
import IEmail from "../types/EmailTypes";

const Email = new Schema<IEmail>({
    email: String,
    language: String
});

export default model<IEmail>("Email", Email);