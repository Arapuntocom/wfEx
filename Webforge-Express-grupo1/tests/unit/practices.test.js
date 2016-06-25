describe("test unitario", function() {

	beforeEach(angular.mock.module('webforge'));



	describe("Controlador", function() {
		it('El controlador practices debe existir', inject(function($rootScope, $controller) {
			var ctrl = $controller('practices#index', {
	    	$scope : $rootScope
	  	});
	   	expect(ctrl).toBeDefined();
	 	}));
	});


	describe("Prueba de servicios", function() {

		var urlService;
		var httpBackend;
		var practicesService;


		it("Servicio PracticesAll", function(){

			angular.mock.inject(function GetDependencies(url, $httpBackend, practices){
				urlService = url;
				httpBackend = $httpBackend;
				practicesService = practices;
			});

			// Falsear URLs y sus respuestas
			httpBackend
			.when('GET', "templates/home.html")
			.respond(200, {
				status: "success"
			});

			httpBackend
			.when('GET', urlService.crear("/api/v2/practices"))
			.respond(200, {
				status: "success",
				data: [{"id":3,"user_id":2,"practice_id":1,
				"plunk":"asdfasdf123123","embed":"xc1q23",
				"created_at":"2016-06-17T20:53:26.980Z","updated_at":"2016-06-17T21:05:55.051Z"},
				{"id":2,"user_id":1,"practice_id":3,
				"plunk":"asdfasdf123123","embed":"xc1q23",
				"created_at":"2016-06-17T20:53:26.980Z","updated_at":"2016-06-17T21:05:55.051Z"}
				]
			});

			// Probar el servicio
			practicesService.PracticesAll()
			.then(function(res) {
				expect(res.status).toEqual(200);	// 200 = codigo de estado OK
			});
			// Elimina las URLs falseadas
			httpBackend.flush();
		});


		it("Servicio findPractices", function(){

			angular.mock.inject(function GetDependencies(url, $httpBackend, practices){
				urlService = url;
				httpBackend = $httpBackend;
				practicesService = practices;
			});

			// Falsear URLs y sus respuestas
			httpBackend
			.when('GET', "templates/home.html")
			.respond(200, {
				status: "success"
			});

			httpBackend
			.when('GET', urlService.crear("/api/v2/users/3/exercises"))
			.respond(200, {
				status: "success",
				data: [{"id":3,"user_id":2,"practice_id":1,
			"plunk":"asdfasdf123123","embed":"xc1q23",
			"created_at":"2016-06-17T20:53:26.980Z","updated_at":"2016-06-17T21:05:55.051Z"}
				]
			});

			// Probar el servicio
			practicesService.findPractices(3)
			.then(function(res) {
				expect(res.status).toEqual(200);	// 200 = codigo de estado OK
			});
			// Elimina las URLs falseadas
			httpBackend.flush();
		});


		it("Servicio creaPlunkr", function(){

			angular.mock.inject(function GetDependencies(url, $httpBackend, practices){
				urlService = url;
				httpBackend = $httpBackend;
				practicesService = practices;
			});

			// Falsear URLs y sus respuestas
			httpBackend
			.when('GET', "templates/home.html")
			.respond(200, {
				status: "success"
			});


			httpBackend
			.when('POST', urlService.crear("api/v2/exercises"))
			.respond(200, {
				status: "success",
				data: [{"user_id":2, "practice_id":4, "plunk":"url", "embed":"url"}
				]
			});
			// Probar el servicio
			practicesService.creaPlunkr(2,4,'url','url')
			.then(function(res) {
				expect(res.status).toEqual(200);	// 200 = codigo de estado OK
			});
				// probar servicio put (se necesita haber realizado post con anterioridad).
			httpBackend
			.when('GET', "templates/home.html")
			.respond(200, {
				status: "success"
			});

			httpBackend
			.when('PUT', urlService.crear("api/v2/exercises"))
			.respond(200, {
				status: "success",
				data: [{"user_id":2, "practice_id":4, "plunk":"url2", "embed":"url2"}
				]
			});
			practicesService.updatePlunkr(2,4,'url2','url2')
			.then(function(res) {
				expect(res.status).toEqual(200);	// 200 = codigo de estado OK
			});
			// Elimina las URLs falseadas
			httpBackend.flush();
		});


	});
});
