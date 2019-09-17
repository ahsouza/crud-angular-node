module.exports = function (app) {

  var controller = app.controllers.pessoa

  app.route('/pessoas')
	.get(controller.listaTodos)
	.post(controller.salvaPessoa)

  app.route('/pessoas/:id')
	.get(controller.obtemPessoa)
	.delete(controller.removePessoa)
}