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
const projectService_1 = __importDefault(require("../services/projectService"));
class ProjectsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { language } = req.query;
                const projects = yield projectService_1.default.get(language);
                res.json(projects);
            }
            catch (_a) {
                return res.status(404).json("No projects found");
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProject = req.body;
                yield projectService_1.default.add(newProject);
                res.json("Project added!");
            }
            catch (e) {
                console.log(e);
                res.status(400).json(e);
            }
        });
    }
}
exports.default = new ProjectsController();
