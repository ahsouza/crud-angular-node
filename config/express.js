const express = require('express')
var load = require('express-load')
var bodyParser = require('body-parser')

module.exports = () => {
  
  const app = express()

  app.set('port', 3000, () => console.log('Servidor escutando na porta 3000!'))
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  app.use(express.static('./public'))

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(require('method-override')())
  
  load('models', {cwd: 'api'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app;  
}