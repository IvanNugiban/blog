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
const Article_1 = __importDefault(require("../models/Article"));
const sortString_1 = __importDefault(require("../utils/sortString"));
const Category_1 = __importDefault(require("../models/Category"));
const subscribtionHelper_1 = __importDefault(require("../helpers/subscribtionHelper"));
class ArticlesService {
    get({ limit, language }) {
        return __awaiter(this, void 0, void 0, function* () {
            const allArticles = yield Article_1.default.find();
            const allCategories = yield Category_1.default.find();
            if (allArticles.length === 0)
                throw new Error("No articles found");
            const allArticlesSorted = allArticles.sort((first, second) => (0, sortString_1.default)(first.category, second.category)).slice(0, limit ? limit : undefined);
            const articles = [...allCategories.map((category) => ({
                    category: category.category,
                    articles: [...allArticlesSorted.filter(filteredArticle => filteredArticle.category === category.category).map(article => ({
                            id: article.id,
                            image: article.image,
                            title: article[`title_${language}`],
                            paragraph: article[`paragraph_${language}`],
                            commentaries: article.commentaries,
                            createdAt: article.createdAt
                        }))]
                }))].sort((first, second) => (0, sortString_1.default)(first.category, second.category));
            const sortedArticles = limit ? articles.slice(0, limit) : articles;
            return sortedArticles;
        });
    }
    getOne(articleId, language) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield Article_1.default.findById(articleId);
            if (!article)
                throw new Error("No article found");
            return {
                id: article.id,
                image: article.image,
                title: article[`title_${language}`],
                paragraph: article[`paragraph_${language}`],
                commentaries: article.commentaries,
                createdAt: article.createdAt
            };
        });
    }
    add(newArticle) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdArticle = yield Article_1.default.create(newArticle);
            return (0, subscribtionHelper_1.default)(`${process.env.baseUrl}/articles:${createdArticle.id}`);
        });
    }
    addCommentary(commentary, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield Article_1.default.findById(articleId);
            if (!article)
                throw new Error("Invalid data");
            return article.update({ commentaries: [...article.commentaries, Object.assign({}, commentary)] });
        });
    }
}
exports.default = new ArticlesService();
