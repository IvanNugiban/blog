import Email from "../models/Email";
import sendEmail from "../nodemailer/nodemailer";
import IEmail from "../types/EmailTypes";


async function notificationHelper(email: IEmail) {
    const allEmails: IEmail[] = await Email.find();
    if (allEmails.length === 0) return;

    await sendEmail({
        from: process.env.emailFrom,
        to: email.email,
        subject: "Ivan's blog",
        template: email.language === "ua" ? "notificationUa" : email.language === "ru" ? "notificationRu" : "notificationEn",
        context: {
            link: `${process.env.baseUrl}/unsubscribe:${email.id}`
        }
    });
}

export default notificationHelper;