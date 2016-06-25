angular.module('heuristics', [])

.controller('heuristics#index', function($scope, $http){
	
	$scope.listaHeuristicas = [
		"heuristica 1", "heuristica 2", "heuristica 3"
	];
})

.controller('heuristics#show', function($scope, $http, $stateParams, $rootScope){

	$scope.heuristica = {
		id: Number($stateParams.id),
		nombre: "Poner imagenes bonitas",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque egestas dapibus. Phasellus ornare posuere risus. Aenean eget varius libero, in sodales est. Nullam commodo erat et ipsum tristique, quis ullamcorper neque fermentum. Donec eget ultrices sem. Aliquam id dapibus est. Aliquam quis fermentum erat, sed facilisis quam. Donec eu sem eget elit rutrum egestas. Suspendisse eget nulla purus. Vestibulum auctor ipsum eleifend risus pulvinar efficitur. Nulla vulputate, elit ut sodales sagittis, arcu lectus bibendum mauris, ac aliquet lacus diam sit amet nunc. Phasellus vel mollis tortor. Ut imperdiet quam sed mauris feugiat, quis auctor ante congue. Fusce viverra nisl nec sodales tempus.",
		queHacer: ["Que hacer 1", "Que hacer 2", "Que hacer 3", "Que hacer 4"],
		queNoHacer: ["Que no hacer 1", "Que no hacer 2", "Que no hacer 3", "Que no hacer 4"],
		recursos: ["Recurso 1", "Recurso 2"]
	};


	$rootScope.tituloPagina = "H"+$scope.heuristica.id+": "+$scope.heuristica.nombre;

	$scope.heuristicaSiguiente = {
		nombre: "(Nombre de la siguiente heuristica)"
	}

	$scope.heuristicaAnterior = {
		nombre: "(Nombre de la anterior heuristica)"
	}

});

