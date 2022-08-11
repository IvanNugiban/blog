"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Article = new mongoose_1.default.Schema({
    image: { type: String, required: true },
    title_ua: { type: String, required: true },
    paragraph_ua: { type: String, required: true },
    title_en: { type: String, required: true },
    paragraph_en: { type: String, required: true },
    title_ru: { type: String, required: true },
    paragraph_ru: { type: String, required: true },
    commentaries: {
        type: [{
                commentary: String,
                creator: String,
                dateOfCreation: String
            }], default: []
    },
    createdAt: { type: String, default: () => new Date().toString() },
    category: { type: String, required: true, ref: "Category" }
});
exports.default = mongoose_1.default.model("Article", Article);
