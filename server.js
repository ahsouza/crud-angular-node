const http = require('http')
var config = require('./config/config')()
const app = require('./config/express')()
require('./config/database')(config.db)

http.createServer(app).listen(config.port, config.address, function(){
  console.log('Express Node Server ' 
  	+ config.address 
  	+ ' (' + config.env 
  	+ ') escutando na porta ' + config.port);
})