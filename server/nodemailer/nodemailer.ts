import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import Mail from "nodemailer/lib/mailer";

interface IOptions extends Mail.Options {
    template: string;
    context: {
        [key: string] : string;
    }
}

async function sendEmail(mailOptions: IOptions) {
    try {
        const transporter = nodemailer.createTransport({
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


        transporter.use('compile', hbs(options))

        return transporter.sendMail(mailOptions)

    } catch (e) {
        console.log(e);
        throw new Error("Server error")
    }
}

export default sendEmail;