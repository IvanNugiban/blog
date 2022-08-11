"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Category = new mongoose_1.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)("Category", Category);
