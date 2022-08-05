export default function (req, res) {

  
    const express = require("express");
  
    const cors = require("cors");
    const app = express();
    app.use(cors());
    app.use(express.json());
  
  
  
    const { google } = require('googleapis');
  
    const { OAuth2 } = google.auth;
  
  
  
    const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
  
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENTID,
      process.env.GMAIL_CLIENTSECRET,
      OAUTH_PLAYGROUND
    );
    
      oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_RFRESHTOKEN,
      });
      const accessToken = oauth2Client.getAccessToken();
  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,    
      host: "smtp.gmail.com",
      secure: true,
         auth: {
          type: 'OAuth2',
        user: process.env.GMAIL_ACC,
        clientId: process.env.GMAIL_CLIENTID,
        clientSecret: process.env.GMAIL_CLIENTSECRET,
        refreshToken: process.env.GMAIL_RFRESHTOKEN,
        accessToken: process.env.GMAIL_ACCESSTOKEN,
        accessToken,
              
           }
    });
    
  
  
    const mailData = {
        from:req.body.email,
        to: 'strongconcrete.info@gmail.com',
        subject: `Mensaje Desde Strong Concrete:  ${req.body.name}` + ` ${req.body.apellido}`,
        text: req.body.message + " | Numero telefono: " + req.body.telefono + " | Enviado De: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Numero telefono: ${req.body.telefono}</p><p>Enviado desde el correo: ${req.body.email}</p>`
    };
  
  
    transporter.sendMail(mailData, function (err, info)  {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("Email Enviado");
        res.send("sucesso");
      }
  });
  
  
   
  }