describe('Prueba el servicio de cursos', function() {

	it("Find All de cursos", function(){

		angular.mock.module('webforge');

		var urlService;
		var httpBackend;
		var coursesService;

		angular.mock.inject(function GetDependencies(url, $httpBackend, courses){
			urlService = url;
			httpBackend = $httpBackend;
			coursesService = courses;
		});

		// Falsear URLs y sus respuestas
		httpBackend
		.when('GET', "templates/home.html")
		.respond(200, {
			status: "success"
		});

		httpBackend
		.when('GET', urlService.crear("api/v2/courses"))
		.respond(200, {
			status: "success",
			data: [
			{"id":1,"name":"Curso nuevo","semester":1,
			"created_at":"2016-05-21T23:06:48.393Z",
			"updated_at":"2016-05-21T23:06:48.393Z",
			"year":2014,"url":"http://localhost:3000/courses/1.json",
			"users":6},
			{"id":3,"name":"OTRO CURSO","semester":4,
			"created_at":"2016-05-21T23:09:19.248Z","updated_at":"2016-05-21T23:09:19.248Z",
			"year":2015,"url":"http://localhost:3000/courses/3.json",
			"users":6}]
		});


		// Probar el servicio
		coursesService.findAll()
		.then(function(res) {
			expect(res.data.data.length).toEqual(2);	// Dos cursos
			expect(res.status).toEqual(200);	// 200 = codigo de estado OK
		});

		// Elimina las URLs falseadas
		httpBackend.flush();
	});



});
