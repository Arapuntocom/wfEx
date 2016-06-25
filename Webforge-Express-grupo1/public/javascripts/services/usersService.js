angular.module('users').service('users', function($http, url) {


	this.findAll = function() {
		return $http.get(url.crear("api/v2/users"));
	}

	this.find = function(userId){
		return $http.get(url.crear("api/v2/users/", userId));
	}

	this.getCalificaciones = function(userId){
		return $http.get(url.crear("api/v2/users/", userId, "/grades/"));
	}

	this.delete = function(userId){
		return $http.delete(url.crear("api/v2/users/", userId));
	}


	this.postUser = function(userName,emailUser,rutUser,passwordUser,user_typeUser,password_confirmationUser){
		var obj =  { 
			user: {
				"name":userName,
				"email":emailUser,
				"rut":rutUser, 
				"password": passwordUser, 
				"user_type":user_typeUser, 
				"password_confirmation":password_confirmationUser
			}
		}			

		return $http.post(url.crear("api/v2/users/"), obj);
	};   

	this.editUser = function(nameUserEdit,emailUserEdit,rutUserEdit,user_typeUserEdit, suspendedUserEdit,selectedUserId){
		var obj = {"user":{"name":nameUserEdit,"email":emailUserEdit,"rut":rutUserEdit, "user_type":user_typeUserEdit, "suspended":suspendedUserEdit}};
		return $http.put(url.crear("api/v2/users/", selectedUserId), obj);
	};







});