var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghithsana20@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'ghithsana20@gmail.com',
  to: 'omartoumi158@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});