angular.module('crud-angular-nodejs').controller('PessoasController', function($scope) {

	$scope.pessoas = [
	  {
		"_id": 1,
		"nome": "Contato Angular 1",
		"email": "cont1@empresa.com.br"
	  },
	  {
		"_id": 2,
		"nome": "Contato Angular 2",
		"email": "cont2@empresa.com.br"
	  },
	  {
		"_id": 3,
		"nome": "Contato Angular 3",
		"email": "cont3@empresa.com.br"
	  }
	];

	$scope.filtro= ''

	$scope.mensagem = {texto: ''}
  
	function buscaPessoas() {
	  Pessoa.query(
	    function(pessoas) {
	      $scope.pessoas = pessoas
	      $scope.mensagem = {}
	    },
	    function(erro) {
	      console.log(erro)
	      $scope.mensagem = {texto: 'Não foi possível obter a lista'}
	    }
	  )
	}
	buscaPessoas()

    $scope.remove = function(pessoa) {
      Pessoa.delete({id: pessoa._id}, 
        buscaPessoas, 
        function(erro) {
          $scope.mensagem = {texto: 'Não foi possível remover o cliente'};
          console.log(erro)
        }
      )
    }

})