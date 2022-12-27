"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const articlesService_1 = __importDefault(require("../services/articlesService"));
const articlesService_2 = __importDefault(require("../services/articlesService"));
class ArticlesController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.query;
                const articles = yield articlesService_1.default.get(params);
                res.json(articles);
            }
            catch (_a) {
                return res.status(404).json("No articles found");
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { articleId, language } = req.query;
                const article = yield articlesService_1.default.getOne(articleId, language);
                res.json(article);
            }
            catch (e) {
                return res.status(404).json("No article found");
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNote = req.body;
                yield articlesService_1.default.add(newNote);
                res.json("Article created");
            }
            catch (e) {
                return res.status(400).json(e);
            }
        });
    }
    addCommentary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { commentary, articleId } = req.body;
                yield articlesService_2.default.addCommentary(commentary, articleId);
                res.json("Commentary added");
            }
            catch (e) {
                return res.status(400).json("Incorrect data");
            }
        });
    }
}
exports.default = new ArticlesController();
