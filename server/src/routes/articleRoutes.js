"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articlesController_1 = __importDefault(require("../controllers/articlesController"));
const articlesController_2 = __importDefault(require("../controllers/articlesController"));
const router = (0, express_1.default)();
router.get('/get', articlesController_1.default.get);
router.get('/getOne', articlesController_1.default.getOne);
router.post('/add', articlesController_1.default.add);
router.post('/addCommentary', articlesController_2.default.addCommentary);
exports.default = router;
