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
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
function sendEmail(mailOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transporter = nodemailer_1.default.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.emailUser,
                    pass: process.env.emailPassword
                }
            });
            const options = {
                viewEngine: {
                    extname: '.hbs',
                    layoutsDir: __dirname + "/views",
                    defaultLayout: 'template',
                },
                viewPath: __dirname + "/views",
                extName: '.hbs'
            };
            transporter.use('compile', (0, nodemailer_express_handlebars_1.default)(options));
            return transporter.sendMail(mailOptions);
        }
        catch (e) {
            console.log(e);
            throw new Error("Server error");
        }
    });
}
exports.default = sendEmail;
