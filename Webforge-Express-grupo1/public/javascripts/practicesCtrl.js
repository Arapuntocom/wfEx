angular.module('practices', [])

.controller('practices#index', function($scope, $http, url, practices, users, error, $location, $timeout){
	
	$scope.usersTodos = function(param1){
		practices.findPractices(param1)
		.then(function(res){
			$scope.exercises = res.data;
		})
		.catch(function(err){
			console.log(err);
		});
	}

	$scope.getPracticas = function(){
		practices.PracticesAll()
		.then(function(res){
			$scope.allPractices = res.data;
		})
		.catch(function(err){
			console.log(err);
		});
	}

	$scope.creaPlunkr = function(plunkr, idPractica) {

		var embedp = '<iframe style="width: 120%; height: 800px" src="' + plunkr + '" frameborder="0" allowfullscren="allowfullscren"></iframe>';

		practices.creaPlunkr(idUser, plunkr, idPractica, embedp)
		.then(function(res){
			$scope.crRespuesta = res.data;
			alert($scope.crsRespuesta);
		})
		.catch(function(err){
			console.log(err);
		});
	}

	$scope.updatePlunkr = function(plunkr, idPractica) {

		var embedp = '<iframe style="width: 120%; height: 800px" src="' + plunkr + '" frameborder="0" allowfullscren="allowfullscren"></iframe>';

		practices.creaPlunkr(idUser, plunkr, idPractica, embedp)
		.then(function(res){
			if( res.data == {"outcome": "Enlace a tu trabajo actualizado, Vista embebida actualizada, "} ){
				alert("bieen");	
			}else{
				alert("mal");
			}
			
		})
		.catch(function(err){
			console.log(err);
		});
	}

	$scope.crearTest = function(idPractica){
		practices.newTest(idUser, idPractica)
	};

	var idUser = Number(3);

	$scope.usersTodos(idUser);
	$scope.getPracticas();

	

$scope.tests = /*testService.query();*/[

            {   "user_id": 2, "evaluation_id": 1, "grade": 4.0},
            {   "user_id": 2, "evaluation_id": 2, "grade": 5.1},
            {   "user_id": 3, "evaluation_id": 1, "grade": 6.0},
            {   "user_id": 3, "evaluation_id": 2, "grade": 2.4}
]

	
})

.controller('practices#show', function($scope, $http, $stateParams, $rootScope){

	

});

