const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email, link) => {

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
    subject: 'Password Reset',
    text: 'This is your password reset link: http://' + link,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
};

module.exports = sendEmail;