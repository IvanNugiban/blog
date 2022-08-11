"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoriesController_1 = __importDefault(require("../controllers/categoriesController"));
const router = (0, express_1.default)();
router.get("/get", categoriesController_1.default.get);
router.post("/add", categoriesController_1.default.add);
exports.default = router;
