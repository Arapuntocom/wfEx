/*
*	Sirve para obtener la URL a donde hacer consultas
*
*/

angular.module('webforge')
.factory('url', function($http) {

	var u = {};

	var urlBase;

	// Si la URL es localhost, entonces arroja como URL base
	// localhost:3000. En otro caso, usa la de la API en heroku
	if(document.location.hostname == "localhost"){
		urlBase = "http://localhost:3000/";
	} else {
		urlBase = "http://webforge-staging.herokuapp.com/"
	}

	
	// Crea una URL. Se debe pasar un numero cualquiera de argumentos
	// y esta funcion crea una URL con formato localhost:3000/arg1arg2arg3
	u.crear = function(...args) {
		var urlFinal = "http://webforge-staging.herokuapp.com/";
		for(arg=0; arg<arguments.length; arg++){
			urlFinal += arguments[arg];
		}
		return urlFinal;
	}

	u.getUrlBase = function(){
		return urlBase;
	}

	return u;
});
