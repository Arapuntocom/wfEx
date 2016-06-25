angular.module('courses', [])

.controller('courses#index', function($scope, url, courses, error){
	
	courses.findAll()
	.then(function(res){
		$scope.cursos = res.data;
	})
	.catch(function(err){
		error.mostrar(err, "No se pueden obtener los cursos.");
		throw "Error: No se pueden obtener los cursos. Esta conectada la API? se esta usando URL: " + url.getUrlBase();
	})

})

.controller('courses#show', function($scope, $stateParams, courses, error, titulo){

	var idCurso = Number($stateParams.id);

	// Obtener informacion detallada del curso
	courses.find(idCurso)
	.then(function(res){

		// Obtener el curso
		$scope.curso = res.data;

		// Cambiar el titulo de la pagina una vez obtenido el nombre del curso
		titulo.cambiar($scope.curso.name);
	})
	.catch(function(err){
		error.mostrar(err, "El curso solicitado no existe.");
	});

	// Obtener alumnos que estan en el curso
	courses.listarAlumnos(idCurso)
	.then(function(res){
		$scope.alumnosCurso = res.data;
	});
});

