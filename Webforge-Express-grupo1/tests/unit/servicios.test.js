describe('Prueba algunos servicios', function() {


	it("Prueba el servicio de URL", function(){

		angular.mock.module('webforge');

		var urlService;

		angular.mock.inject(function GetDependencies(url){
			urlService = url;
		});

		var urlBase = urlService.getUrlBase();

		expect(urlBase.length > 5).toEqual(true);

		// Ver si construye la URL correctamente
		expect(urlService.getUrlBase()).toEqual(urlBase);
		expect(urlService.crear()).toEqual(urlBase);
		expect(urlService.crear("hola", "chao")).toEqual(urlBase+"hola"+"chao");
		expect(urlService.crear("hola", "chao")).toEqual(urlBase+"hola"+"chao");
		expect(urlService.crear("usuarios/", 5)).toEqual(urlBase+"usuarios/5");
	});


	it("Cambia el titulo y los cambios se aplican correctamente al HTML", function(){

		angular.mock.module('webforge');

		var tituloService;
		var rootScope;
		var compile;

		angular.mock.inject(function GetDependencies(titulo, $rootScope, $httpBackend, $compile){
			tituloService = titulo;
			rootScope = $rootScope;
			compile = $compile;
		});

		$scope = rootScope.$new();		

		// Crear el objeto HTML
		var titleElement = angular.element("<title ng-bind=\"tituloPagina + ' | WebForge'\"></title>");
		compile(titleElement)($scope);

		// Lo siguiente consiste en: 
		// 1. Aplicar la funcion que cambia el titulo
		// 2. Aplicar los cambios al scope
		// 3. Hacer el test: ver si el titulo del scope se aplico al HTML
		// 4. Repetir.

		tituloService.cambiar("Nuevo titulo");
		$scope.$digest();
		expect(titleElement.html()).toEqual("Nuevo titulo | WebForge");

		tituloService.cambiar("asdkjlad kasdkasjdklasjdasjdalsindj sakdaskdasdajsdkasjdklasjdlk");
		$scope.$digest();
		expect(titleElement.html()).toEqual("asdkjlad kasdkasjdklasjdasjdalsindj sakdaskdasdajsdkasjdklasjdlk | WebForge");

		tituloService.cambiar("case sensitive");
		$scope.$digest();
		expect(titleElement.html()).not.toEqual("casE sensitive | WebForge");

		tituloService.cambiar("");
		$scope.$digest();
		expect(titleElement.html()).toEqual(" | WebForge");

		tituloService.cambiar();
		$scope.$digest();
		expect(titleElement.html()).toEqual(" | WebForge");

		tituloService.cambiar(51);
		$scope.$digest();
		expect(titleElement.html()).toEqual("51 | WebForge");

	});


});
