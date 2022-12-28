import mongoose from "mongoose";
import {IArticleSchema} from "../types/ArticlesTypes";


const Article = new mongoose.Schema<IArticleSchema>({
    image: {type: String, required: true},
    title_ua: {type: String, required: true},
    paragraph_ua: {type: String, required: true},
    title_en: {type: String, required: true},
    paragraph_en: {type: String, required: true},
    title_ru: {type: String, required: true},
    paragraph_ru: {type: String, required: true},
    commentaries: {
        type: [{
            commentary: String,
            creator: String,
            dateOfCreation: String
        }], default: []
    },
    createdAt: {type: String, default: () => new Date().toString()},
    category: {type: String, required: true, ref: "Category"}
})

export default mongoose.model<IArticleSchema>("Article", Article);