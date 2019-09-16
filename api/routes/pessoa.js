module.exports = function(app) {
  var controller = app.controllers.pessoa

  app.get('/pessoas', controller.listaPessoas)
  app.get('/pessoas/:id', controller.getPessoa)
}