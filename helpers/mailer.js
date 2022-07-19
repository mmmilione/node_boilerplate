import nodemailer from 'nodemailer';
import allSecrets from '../secrets.js';

const transporter = nodemailer.createTransport({
    host: allSecrets.mailer.host,
    port: allSecrets.mailer.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: allSecrets.mailer.user, // generated ethereal user
      pass: allSecrets.mailer.pw, // generated ethereal password
    },
});

const sendEmail = async (from, to, subject, text, html, replayTo) => {
    try {
        await transporter.sendMail({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
            replayTo, //Reply to the user email
        });
        return true;
    } catch (error) {
        console.log(error);
        throw new Error("Mail Delivery Failed");
    }
}

export default sendEmail;