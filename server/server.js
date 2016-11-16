var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  nodemailer = require('nodemailer'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv')

app.set('port', process.env.PORT || 5000);


app.use(logger('dev'))
app.use(express.static('client'))
app.use(bodyParser.json())

app.get('*', function(req, res) {
  res.sendFile('/client/index.html', {root: './'})
})


///Working on Contact form////
app.post('/api/contact', function(req, res) {
// create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: req.body.email, // sender address
      to: 'davidjwe33@gmail.com',
      text: req.body.message
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  })
});



app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
