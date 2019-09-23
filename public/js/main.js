angular.module('crud-angular-nodejs', ['ngRoute', 'ngResource', 'myComponents'])
  .config(function($routeProvider,  $httpProvider) {

  	$routeProvider.when('/pessoas', {
  	  templateUrl: 'partials/pessoas.html',
  	  controller: 'PessoasController'
  	})


	$routeProvider.when('/pessoa/:pessoaId', {
      templateUrl: 'partials/pessoa.html',
      controller: 'PessoaController'
    })

    $routeProvider.when('/pessoa', {
      templateUrl: 'partials/pessoa.html',
      controller: 'PessoaController'
    })

    $routeProvider.otherwise({redirectTo: '/pessoas'})

  })