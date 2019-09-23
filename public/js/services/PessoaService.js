angular.module('crud-angular-node').factory('Pessoa', function($resource) { 
  return $resource('/pessoas/:id')
})