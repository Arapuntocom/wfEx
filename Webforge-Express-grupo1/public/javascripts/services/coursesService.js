angular.module('courses').service('courses', function($http, url) {


	this.findAll = function() {
		// Colocar la URL que retorna todos los cursos
		return $http.get(url.crear("api/v2/courses"));
	}

	this.find = function(cursoId){
		return $http.get(url.crear("api/v2/courses/", cursoId));
	}

	this.listarAlumnos = function(cursoId){
		// Debe colocarse la URL que retorna todos los alumnos del curso cursoId
		return $http.get(url.crear("api/v2/courses/", cursoId, "/users"));
	}


});