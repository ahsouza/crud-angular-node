angular.module('crud-angular-node').controller('PessoasController', function(Pessoa, $scope) {

	$scope.pessoas = [];

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