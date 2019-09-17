angular.module('crud-angular-nodejs', ['ngRoute'])
  .config(function($routeProvider) {

  	$routeProvider.when('/pessoas', {
  		templateUrl: 'partials/pessoas.html',
  		controller: 'PessoasController'
  	})
  })