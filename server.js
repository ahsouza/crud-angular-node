const http = require('http')
const app = require('./config/express')()

http.createServer(app).listen(app.get('port'), function() {
  console.log(`Servidor Express Node.JS escutando em http://localhost:${app.get('port')}`)
})