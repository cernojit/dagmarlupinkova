const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 


app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
    const {fname, email, message} = req.body;
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
	        user: process.env.USERNAME,
	        pass: process.env.PASSWORD
	        },
        tls: {
            rejectUnauthorized: false
        },
        logger:true
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: email, // sender address
        replyTo: email,
        to: 'jice@seznam.cz', // list of receivers
        subject: 'Zpráva z dagmarlupinkova.cz', // Subject line
        text: message, // plain text body
        // html: '<b>From Dagmar Lupínková pages</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    res.send('Email successfullt sent')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});