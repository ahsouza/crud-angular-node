angular.module('crud-angular-nodejs').factory('Pessoa', function($resource) { 
  return $resource('/pessoas/:id')
})