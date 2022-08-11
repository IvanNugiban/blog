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
const Project_1 = __importDefault(require("../models/Project"));
const subscribtionHelper_1 = __importDefault(require("../helpers/subscribtionHelper"));
class ProjectService {
    get(language) {
        return __awaiter(this, void 0, void 0, function* () {
            const allProjects = yield Project_1.default.find();
            if (allProjects.length === 0)
                throw new Error("No projects found");
            return allProjects.map(project => ({
                id: project.id,
                title: project[`title_${language}`],
                images: project.images,
                description: project[`description_${language}`],
                link: project.link
            }));
        });
    }
    add(newProject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Project_1.default.create(newProject);
            return (0, subscribtionHelper_1.default)(`${process.env.baseUrl}/projects`);
        });
    }
}
exports.default = new ProjectService();
