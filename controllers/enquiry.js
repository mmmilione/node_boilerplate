import { checkEmail, checkMsg } from '../helpers/sanitize.js';
import sendEmail from '../helpers/mailer.js';
import allSecrets from '../secrets.js';

const handleEnquiry = async (req, res) => {

    try {

        //Check email
        if(checkEmail(req.body.email) == false){
            return res.status(400).send("Email Address is Not Correct");
        }

        //Check Message length: max 500 characters
        if(req.body.msg.length > 500){
            return res.status(400).send("The maximum length of the message is 500 characters");
        }

        //Check Message
        if(checkMsg(req.body.msg) == false){
            return res.status(400).send("There is something wrong with the message");
        }

        //Define subject, text and html
        const subject = "New Contact";
        const text = `You recieved a new message from ${req.body.email}:\n\n${req.body.msg}`;
        const html = `<p>You recieved a new message from ${req. body.email}</p><p><b>${req.body.msg}</b></p>`
        
        // send mail with defined transport object
        await sendEmail(allSecrets.mailer.user, allSecrets.mailer.user, subject, text, html, req.body.email);
        
        //Send response to client
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
    
}

export default handleEnquiry;