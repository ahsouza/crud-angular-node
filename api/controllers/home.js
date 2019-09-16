module.exports = function () {
  var controller = {}

  controller.home = function(req, res) {
  	res.render('home', {nome: 'Express'})
  }

  return controller;
}