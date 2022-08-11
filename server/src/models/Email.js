"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Email = new mongoose_1.Schema({
    email: String,
    language: String
});
exports.default = (0, mongoose_1.model)("Email", Email);
