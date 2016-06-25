
angular.module('webforge')
.factory('util', function() {

	var u = {};

	// Expresion regular para formatear la fecha
	expFecha = new RegExp(/([0-9]+-[0-9]+-[0-9]+)T([0-9]+:[0-9]+:[0-9]+)\.[0-9]+Z/);


	u.truncarDecimales = function(num, dec){
		var d = Math.pow(10, dec);
		return Math.floor(num * d) / d;
	}

	// Formatea una fecha de la forma '2016-05-23T21:57:12.879Z' para que se vea presentable
	u.formatoFecha = function(strFecha){

		grupos = strFecha.match(expFecha);

		if(grupos.length >= 3)
			return grupos[1] + ", " + grupos[2];

		// Si no se pudo aplicar la expresion regular, retornar la fecha original
		return strFecha; 
	}

	return u;
});