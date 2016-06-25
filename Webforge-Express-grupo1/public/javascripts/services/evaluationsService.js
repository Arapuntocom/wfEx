angular.module('evaluations').service('evaluations', function($http, url) {

	this.find = function(evalId){
		return $http.get(url.crear("api/v2/evaluations/", evalId));
	}

	this.evaluationsAll = function() {
		return $http.get(url.crear("api/v2/evaluations"));
	}

	this.questionsAll = function() {
		return $http.get(url.crear("api/v2/questions"));
	}
	
	this.alternativesAll = function() {
		return $http.get(url.crear("api/v2/alternatives"));
	}
	
	this.compositionsAll = function() {
		return $http.get(url.crear("api/v2/compositions"));
	}
	
	this.topicsAll = function() {
		return $http.get(url.crear("api/v2/topics"));
	}
	
	this.gradesAll = function(idUser) {
		return $http.get(url.crear("api/v2/users/"+idUser+"/grades"));
	}
	
	this.newTest = function(idTest, questionId, alternative) {
		
		var obj =  { 			
			"question_id":questionId,
			"alternative": alternative
		}			
		return $http.post(url.crear("api/v2/tests/"+idTest+"/answers", obj));
	}

});
