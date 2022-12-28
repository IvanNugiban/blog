import {model, Schema} from "mongoose";
import {ICategory} from "../types/CategoriesTypes";

const Category = new Schema<ICategory>({
    image: {type: String, required: true},
    category: {type: String, required: true}
});

export default model<ICategory>("Category", Category);