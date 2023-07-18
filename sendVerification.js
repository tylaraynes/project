const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendVerification = async (email, link) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nutritionapp7@gmail.com',
      pass: 'afzttirvjllddhre'
    }
  });
  

  var mailOptions = {
    from: 'nutritionapp7@gmail.com',
    to: email,
    subject: 'Email Verification',
    text: 'This is your email verification link: http://' + link,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
};

module.exports = sendVerification;