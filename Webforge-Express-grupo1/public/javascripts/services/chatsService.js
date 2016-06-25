angular.module('chats').service('chats', function($http, url) {


	this.findAll = function() {
		return $http.get(url.crear("api/v2/chats"));
	}

	this.find = function(chatId){
		return $http.get(url.crear("api/v2/chats/", chatId));
	}

	this.agregarMensaje = function(chatId, mensaje, userId){
		return $http.post(url.crear("api/v2/chats/", chatId, "/messages"),{
			body: mensaje,
			user_id: userId
		});
	}

});