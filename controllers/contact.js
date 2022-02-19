var nodemailer = require('nodemailer');

module.exports.processContactPage = function(req, res, next){
    const {firstname,lastname,contact,email,message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL,
          pass: process.env.MAIL_PSWD
        }
      });
      
      var mailOptions = {
        from: process.env.MAIL,
        to: email,
        subject: 'Contact through ePortfolio - ' + firstname + " " + lastname + "(Contact - "+ contact +")" ,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}