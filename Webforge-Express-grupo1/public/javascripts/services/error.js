/*
*	Servicio para manejar el error y mostrar una pagina de error
*
*/

angular.module('webforge')
.factory('error', function($state) {

	var e = {};

	// Se dirige a la vista de error
	// El primer argumento es el JSON con la respuesta desde el servidor
	// El segundo argumento es un mensaje personalizado (opcional)
	e.mostrar = function(errorResponse, mensajeCustom = null){
		$state.go('error', {
			codigo: errorResponse.status,
			mensaje: mensajeCustom
		}, null);
	}

	return e;
});