import Email from "../models/Email";
import sendEmail from "../nodemailer/nodemailer";
import IEmail from "../types/EmailTypes";


async function subscriptionHelper(link : string) {
        const allEmails: IEmail[] = await Email.find();

        if (allEmails.length === 0) return;

        await Promise.all(allEmails.map(async email => await sendEmail({
            from: process.env.emailFrom,
            to: email.email,
            subject: "Ivan's blog",
            template: email.language === "ua" ? "updateUa" : email.language === "ru" ? "updateRu" : "updateEn",
            context: {
                link: link,
                unsubscribe_link: `${process.env.baseUrl}/unsubscribe:${email.id}`
            }
        })));
}

export default subscriptionHelper;