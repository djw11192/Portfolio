var
  express = require('express'),
  app = express(),
  logger = require('morgan')

const PORT = process.env.port || 5000

app.use(logger('dev'))
app.use(express.static('client'))

app.get('*', function(req, res) {
  res.sendFile('/client/index.html', {root: './'})
})

app.listen(PORT, function(err) {
  console.log(err || "Server running on port " + PORT)
})
