angular.module('webforge').controller('footerCtrl', function($scope, $http){
	
	// Inicialmente esta colapsado
	$scope.isCollapsed = true;

	// Funcion para invertir el valor de colapsado
	$scope.toggle = function(){
		$scope.isCollapsed = !$scope.isCollapsed;

		if(!$scope.isCollapsed){
			// Bajar hasta el fondo de la pantalla
			$("html, body").animate({ 
			scrollTop: $(document).height() 
			}, 500)
		}
	}

	
});
