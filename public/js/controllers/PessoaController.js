angular.module('crud-angular-node').controller('PessoaController', function($scope, $routeParams, Pessoa, $rootScope) {

  Pessoa.query(function(pessoas) {
    console.log("Lista de clientes")
	$scope.pessoas = pessoas
  })
		
  if($routeParams.pessoaId) {
	console.log('Parâmetro ' + $routeParams.pessoaId)
	
	Pessoa.get({id: $routeParams.pessoaId}, 
	  function(pessoa) {
	    console.log(`Cliente encontrado: ${pessoa}`)
		$scope.pessoa = pessoa
      }, 
	  function(erro) {
	    console.log(erro)
		$scope.mensagem = {texto: 'Cliente não existe. Cadastre um novo cliente!'}
	  }
	);

  } else {
	console.log("Cadastrar nova pessoa")
	$scope.pessoa = new Pessoa()
  }

	$scope.salva = function() {
		
		$scope.pessoa.$save()
		.then(function() {
			$scope.mensagem = {texto: 'Salvo com sucesso'}
			$scope.pessoa = new Pessoa()
			$scope.$broadcast('cliente Salvo')
		})
		.catch(function(erro) {
  			$scope.mensagem = {texto: 'Não foi possível salvar'}
  		})
	}

})