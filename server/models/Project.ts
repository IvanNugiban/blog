import {Schema, model} from "mongoose";
import {IProjectSchema} from "../types/ProjectTypes";

const Project = new Schema<IProjectSchema>({
    title_ua: String,
    title_ru: String,
    title_en : String,
    images: [String],
    description_ua: String,
    description_ru: String,
    description_en: String,
    link: String
})

export default model<IProjectSchema>("Project", Project);
