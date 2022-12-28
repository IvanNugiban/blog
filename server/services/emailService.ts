import Email from "../models/Email";
import notificationHelper from "../helpers/notificationHelper";
import {language} from "../types/ArticlesTypes";

class EmailService {

    async add(email: string, language: language) {
        const possibleEmail = await Email.findOne({email});
        if (possibleEmail) throw new Error("This email is already subscribed to updates");
        const subscribedEmail = await Email.create({email, language});
        return  notificationHelper(subscribedEmail);
    }

    async unsubscribe(emailId: string) {
       const possibleEmail = await Email.findById(emailId);
       if (!possibleEmail) throw new Error("Email is not found");
       return possibleEmail.deleteOne();
    }
}

export default new EmailService();