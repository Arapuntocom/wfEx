/*
*	Controlador para la vista error. Sirve para pasar el mensaje personalizado, y el
*	codigo de error
*
*/
angular.module('webforge').controller('errorCtrl', function($scope, $http, $stateParams, titulo){
	
	$scope.mensaje = $stateParams.mensaje;
	$scope.codigo = $stateParams.codigo;

	if($scope.codigo != null){
		titulo.cambiar("Error " + $scope.codigo);
	} else {
		titulo.cambiar("Error");
	}
	
	
});
