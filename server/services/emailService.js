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
const notificationHelper_1 = __importDefault(require("../helpers/notificationHelper"));
class EmailService {
    add(email, language) {
        return __awaiter(this, void 0, void 0, function* () {
            const possibleEmail = yield Email_1.default.findOne({ email });
            if (possibleEmail)
                throw new Error("This email is already subscribed to updates");
            const subscribedEmail = yield Email_1.default.create({ email, language });
            return (0, notificationHelper_1.default)(subscribedEmail);
        });
    }
    unsubscribe(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            const possibleEmail = yield Email_1.default.findById(emailId);
            if (!possibleEmail)
                throw new Error("Email is not found");
            return possibleEmail.deleteOne();
        });
    }
}
exports.default = new EmailService();
