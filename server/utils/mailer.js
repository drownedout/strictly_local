const nodemailer = require('nodemailer');
const { confirmationTemplate } = require('./mailer_templates/confirmation');

function sendNewUserConfirmationLink(newUserEmail, confirmationToken){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  const message = confirmationTemplate(newUserEmail, confirmationToken);

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: `${newUserEmail}`,
    subject: 'Confirmation Link',
    html: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


module.exports = sendNewUserConfirmationLink;
