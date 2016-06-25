angular.module('evaluations', [])

.controller('evaluations#index', function($scope, $http, url, evaluations, users, error, $location, $timeout){
	
	var idUser = 2;

  $scope.allquestions = function(){
    evaluations.questionsAll()
    .then(function(res){
      $scope.questions = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.allalternatives = function(){
    evaluations.alternativesAll()
    .then(function(res){
      $scope.alternatives = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.allcompositions = function(){
    evaluations.compositionsAll()
    .then(function(res){
      $scope.compositions = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.alltopics = function(){
    evaluations.topicsAll()
    .then(function(res){
      $scope.topics = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.allgrades = function(idUser){
    evaluations.gradesAll(idUser)
    .then(function(res){
      $scope.grades = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.allevaluations = function(){
    evaluations.evaluationsAll()
    .then(function(res){
      $scope.evaluations = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.content = function(arg){
    alert($scope.alternativaSeleccionada);
  }

  $scope.cambiaCalificable = function(){
    $scope.ready = true;
  }

  $scope.calificable = function(){
    return $scope.ready;
  }

  $scope.crearTest = function(){
    evaluations.newTest(2, 2, 2)
  };

  $scope.ready = false;

  $scope.allgrades(idUser);

  $scope.allevaluations();

  $scope.allquestions();
    
  $scope.allalternatives();

  $scope.allcompositions();

  $scope.alltopics();

  $scope.alternativaSeleccionada;
	
})

.controller('evaluations#questions', function($scope, $http, url, evaluations, users, error, $location, $timeout, $stateParams, $rootScope){
	
	$scope.idEv = Number($stateParams.id);

	$scope.qInit = Number($stateParams.qId);

    $scope.index = { id: $scope.qInit };    
//	$scope.index = { qInit: Number($stateParams.qInit) };    

$scope.cantPreguntasRespondidas =0;



	$scope.allcompositions = function(){
		evaluations.compositionsAll()
		.then(function(res){
			$scope.compositions = res.data;
			$scope.cantPreguntas = Object.keys($scope.compositions).length;		
		})
		.catch(function(err){
		  console.log(err);
		});
	}

	$scope.allquestions = function(){
		evaluations.questionsAll()
		.then(function(res){
		  $scope.questions = res.data;
		})
		.catch(function(err){
		  console.log(err);
		});
	  }

	  $scope.allalternatives = function(){
		evaluations.alternativesAll()
		.then(function(res){
		  $scope.alternatives = res.data;
		})
		.catch(function(err){
		  console.log(err);
		});
	  }

  $scope.allquestions();
    
  $scope.allalternatives();

  $scope.allcompositions();


	
})

.controller('evaluations#results', function($scope, $http, url, evaluations, users, error, $location, $timeout, $stateParams, $rootScope){
	
	$scope.idEv = Number($stateParams.id);

	

   
$scope.cantPreguntas =0;
$scope.cantCorrectas =0;
$scope.last_test = {"grade":5.7};
$scope.promedioCurso = 4.7;
$scope.comparacionCurso = "Estás en el 53% mejor de tu curso";

$scope.topicsToStudy = [];
$scope.cantTopEst = Object.keys($scope.topicsToStudy).length;


	$scope.allcompositions = function(){
		evaluations.compositionsAll()
		.then(function(res){
			$scope.compositions = res.data;
			$scope.cantPreguntas = Object.keys($scope.compositions).length;		
		})
		.catch(function(err){
		  console.log(err);
		});
	}

	$scope.allquestions = function(){
		evaluations.questionsAll()
		.then(function(res){
		  $scope.questions = res.data;
		})
		.catch(function(err){
		  console.log(err);
		});
	  }

	  $scope.allalternatives = function(){
		evaluations.alternativesAll()
		.then(function(res){
		  $scope.alternatives = res.data;
		})
		.catch(function(err){
		  console.log(err);
		});
	  }

  $scope.allquestions();
    
  $scope.allalternatives();

  $scope.allcompositions();


	
});
