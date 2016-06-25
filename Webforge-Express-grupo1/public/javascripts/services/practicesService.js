angular.module('practices').service('practices', function($http, url) {

	this.findPractices = function(idUsuario) {
		return $http.get(url.crear("/api/v2/users/"+idUsuario+"/exercises"));
	}

	this.PracticesAll = function() {
		return $http.get(url.crear("/api/v2/practices"));
	}

	this.creaPlunkr = function(idUser, plunkr, idPractica, embedp){
		var obj =  { 			
			"user_id":idUser,
			"practice_id":idPractica,
			"plunk":plunkr, 
			"embed": embedp			
		}			
		return $http.post(url.crear("api/v2/exercises"), obj);
	};

	this.updatePlunkr = function(idUser, plunkr, idPractica, embedp){
		var obj =  { 			
			"user_id":idUser,
			"practice_id":idPractica,
			"plunk":plunkr, 
			"embed": embedp			
		}			
		return $http.put(url.crear("api/v2/exercises"), obj);
	};

});
