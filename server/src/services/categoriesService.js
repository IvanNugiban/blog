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
const Category_1 = __importDefault(require("../models/Category"));
const sortString_1 = __importDefault(require("../utils/sortString"));
const subscribtionHelper_1 = __importDefault(require("../helpers/subscribtionHelper"));
class CategoriesService {
    get(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield Category_1.default.find();
            if (categories.length === 0)
                throw new Error("No categories found");
            const sortedCategories = categories.sort((first, second) => (0, sortString_1.default)(first.category, second.category));
            const categoriesToReturn = params.limit ? sortedCategories.slice(0, params.limit).sort((first, second) => (0, sortString_1.default)(first.category, second.category)) : sortedCategories;
            return categoriesToReturn.map(category => ({
                id: category.id,
                image: category.image,
                category: category.category
            }));
        });
    }
    add(category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Category_1.default.create(category);
            return (0, subscribtionHelper_1.default)(`${process.env.baseUrl}/projects`);
        });
    }
}
exports.default = new CategoriesService();
