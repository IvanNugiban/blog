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
const emailService_1 = __importDefault(require("../services/emailService"));
class EmailController {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, language } = req.body;
                yield emailService_1.default.add(email, language);
                res.json("Subscribed!");
            }
            catch (e) {
                const { message } = e;
                res.status(405).json(message);
            }
        });
    }
    unsubscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { emailId } = req.query;
                yield emailService_1.default.unsubscribe(emailId);
                res.json("Unsubscribed!");
            }
            catch (e) {
                res.status(404).json(e);
            }
        });
    }
}
exports.default = new EmailController();
