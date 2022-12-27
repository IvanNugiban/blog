"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailController_1 = __importDefault(require("../controllers/emailController"));
const router = (0, express_1.default)();
router.post("/add", emailController_1.default.add);
router.delete("/unsubscribe", emailController_1.default.unsubscribe);
exports.default = router;
