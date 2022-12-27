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
const Email_1 = __importDefault(require("../models/Email"));
const nodemailer_1 = __importDefault(require("../nodemailer/nodemailer"));
function notificationHelper(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const allEmails = yield Email_1.default.find();
        if (allEmails.length === 0)
            return;
        yield (0, nodemailer_1.default)({
            from: process.env.emailFrom,
            to: email.email,
            subject: "Ivan's blog",
            template: email.language === "ua" ? "notificationUa" : email.language === "ru" ? "notificationRu" : "notificationEn",
            context: {
                link: `${process.env.baseUrl}/unsubscribe:${email.id}`
            }
        });
    });
}
exports.default = notificationHelper;
