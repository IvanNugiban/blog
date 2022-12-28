import {Request, Response} from "express";
import emailService from "../services/emailService";

class EmailController {
    async add(req: Request, res: Response) {
        try {
            const {email, language} = req.body;
            await emailService.add(email, language);
            res.json("Subscribed!")
        } catch (e) {
            const {message} = e as Error;
            res.status(405).json(message);
        }
    }

    async unsubscribe(req: Request<undefined, undefined, undefined, {emailId: string}>, res: Response) {
        try {
            const {emailId} = req.query;
            await emailService.unsubscribe(emailId);
            res.json("Unsubscribed!")
        } catch (e) {
            res.status(404).json(e);
        }
    }
}

export default new EmailController();