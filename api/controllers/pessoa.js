var pessoas = [
  {_id: 1, nome: 'Aníbal Henrique', email: 'annibalhsouza@gmail.com', endereco: 'Rua Sete De Setembro, 671 - Serra/ES'},
  {_id: 2, nome: 'Elon Musk', email: 'tesla@spacex.com', endereco: 'Rua Exemplo Tesla - California/EUA'},
  {_id: 3, nome: 'Tony Stark', email: 'industries@starks.com', endereco: 'Tokyo - 2000'},
  {_id: 4, nome: 'Marie Cure', email: 'radioactive@cure.com', endereco: 'Russia - 1552'}
]

module.exports = function() {
  var controller = {}

  controller.listaPessoas = function(req, res) {
  	res.json(pessoas)
  }

  controller.getPessoa = function(req, res) {
  	var idPessoa = req.params.id

  	var pessoa = pessoas.filter(function(pessoa) {
  		return pessoa._id == idPessoa
  	})[0]

  	pessoa ? res.json(pessoa) : res.status(404).send('Pessoa não encontrada')


  }



  return controller;

}