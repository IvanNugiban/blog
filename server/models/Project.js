"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Project = new mongoose_1.Schema({
    title_ua: String,
    title_ru: String,
    title_en: String,
    images: [String],
    description_ua: String,
    description_ru: String,
    description_en: String,
    link: String
});
exports.default = (0, mongoose_1.model)("Project", Project);
