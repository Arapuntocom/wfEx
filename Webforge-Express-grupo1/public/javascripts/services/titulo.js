/*
*	Servicio para cambiar el titulo de la pagina
*
*/

angular.module('webforge')
.factory('titulo', function($rootScope) {

	var t = {};

	t.cambiar = function(titulo){
		$rootScope.tituloPagina = titulo;
	}

	t.obtener = function(titulo){
		return $rootScope.tituloPagina;
	}	

	return t;
});