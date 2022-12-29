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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const articleRoutes_1 = __importDefault(require("./routes/articleRoutes"));
const categoriesRoutes_1 = __importDefault(require("./routes/categoriesRoutes"));
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 5050;
const dbUrl = process.env.DB_URL || "";
app.use((0, cors_1.default)({
    origin: process.env.BASE_URL,
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use("/api/email", emailRoutes_1.default);
app.use("/api/articles", articleRoutes_1.default);
app.use("/api/categories", categoriesRoutes_1.default);
app.use("/api/projects", projectsRoutes_1.default);
app.options('/*', (_, res) => {
    res.sendStatus(200);
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(dbUrl);
    app.listen(PORT);
});
start();
