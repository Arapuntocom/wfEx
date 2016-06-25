angular.module('users', [])

.controller('users#index', function($scope, url, users, error, $location, $timeout){


	$scope.usersIndex = function(){
		users.findAll()
		.then(function(res){
			$scope.users = res.data;
		})
		.catch(function(err){
			console.log(err);
		});
	}

	$scope.usersIndex();

	$scope.submit = function() {

		if($scope.emailUserNew == undefined || !$scope.emailUserNew.match(/^[a-z\.]+\@[a-z0-9]+\.[a-z]+$/i)) { $scope.ERRORES = 'Debe ser un correo valido xxx.xxx@yyy.zz'; return; }
		if($scope.nameUserNew == undefined || $scope.nameUserNew.length == 0) { $scope.ERRORES = 'Ingrese nombre'; return; }
		


		if($scope.rutUserNew == undefined || !$scope.rutUserNew.match(/[0-9]+\.[0-9]{3}\.[0-9]{3}\-[0-9k]{1}/i)) { $scope.ERRORES = 'Debe escribir un RUT valido'; return; }
		
		if($scope.passwordUserNew == undefined || $scope.passwordUserNew.length < 8) { $scope.ERRORES = 'La clave es demasiado corta. Utilice 8 caracteres.'; return; }
		if($scope.password_confirmationUser == undefined || $scope.passwordUserNew != $scope.password_confirmationUser) { $scope.ERRORES = 'Las claves deben ser identicas.'; return; }

		


		users.postUser(
			$scope.nameUserNew,
			$scope.emailUserNew,
			$scope.rutUserNew,
			$scope.passwordUserNew,
			$scope.user_typeUserNew,
			$scope.password_confirmationUser)
		.then(function(data){


				$scope.ERRORES = ''

				// Limpiar el formulario (no se pueden cerrar modales con bootstrap.js y desde Angular)
				$scope.nameUserNew = "";
				$scope.emailUserNew = "";
				$scope.rutUserNew = "";
				$scope.passwordUserNew = "";
				$scope.user_typeUserNew = "";
				$scope.password_confirmationUser = "";

				// Obtener los usuarios denuevo.
				// Deberia el REST retornar el usuario creado para asi simplemente agregarlo a la lista de $scope.users
				$scope.usersIndex();
				
				
			})
		.catch(function(err){
			$scope.ERRORES = 'No se pudo crear usuario. Rellene todos los campos. Verifique que el RUT es valido y ni el RUT ni correo existan con anterioridad.'

		})
	}

	$scope.setSelectedUser = function(idd) {
	    $scope.selectedUserId = idd;
	}


	$scope.verHistorial = function(user_id){

		// Esperar a que se cierre el modal, y cambiar de pagina.
		// (Parche para bootstrap)

		$timeout(function () {
			$location.url('users/'+user_id+'/historial');
		}, 500);

	}


	$scope.submit_edit = function(nameUserEdit,emailUserEdit,rutUserEdit,user_typeUserEdit,suspendedUserEdit){
		users.editUser(nameUserEdit,emailUserEdit,rutUserEdit,user_typeUserEdit, suspendedUserEdit,$scope.selectedUserId)
		.then(function(res){

			var usuarioEditado = res.data;

			for(i=0; i<$scope.users.length; i++){
				if($scope.users[i].id == $scope.selectedUserId){

					// Encontrar el usuario en la lista de usuarios, para actualizarlo
					// Si se reemplaza el objeto completo, el modal se muere,
					// por lo tanto hay que cambiar atributo por atributo
					$scope.users[i].email = usuarioEditado.email;
					$scope.users[i].name = usuarioEditado.name;
					$scope.users[i].user_type = usuarioEditado.user_type;
					$scope.users[i].suspended = usuarioEditado.suspended;
					break;
				}
			}
		})
		.catch(function(err){
			console.log(err);
		});
	}
	/*$scope.submit_edit = function(...args){
		console.log(arguments);
	}*/

})

.controller('users#show', function($scope, $stateParams, users, error, titulo, $state, evaluations, util){

	var idUser = Number($stateParams.id);
	$scope.util = util;


	// Obtener la evaluacion
	evaluations.find(1)
	.then(function(res){
		$scope.evaluation = res.data;
	});



	// Obtener informacion detallada del usuario
	users.find(idUser)
	.then(function(res){

		// Obtener el usuario
		$scope.user = res.data;
		// Cambiar el titulo de la pagina una vez obtenido el nombre del usuario
		titulo.cambiar($scope.user.name);
	})
	.catch(function(err){
		error.mostrar(err, "El alumno solicitado no existe.");
	});



	// Obtener las calificaciones (ultima nota, peor nota, mejor nota, promedio)
	users.getCalificaciones(idUser)
	.then(function(res){
		userTests = res.data;			
		var cuantos = res.data.length;

		if(cuantos > 0){
			$scope.lastTest = userTests[cuantos-1];
			$scope.lastTest.grade = $scope.lastTest.grade, 2;
			var peorNota = 7;
			var mejorNota = 0;
			var suma = 0;
			for(var i=0; i<cuantos; i++){
				suma += Number(userTests[i].grade);
				mejorNota = (userTests[i].grade > mejorNota)? userTests[i].grade : mejorNota;
				peorNota = (userTests[i].grade < peorNota)? userTests[i].grade : peorNota;
			}
			$scope.mejorNota = mejorNota, 2;
			$scope.peorNota = peorNota, 2;
			$scope.promedioNota = suma/cuantos, 2;

		}
		
	});



	// Eliminar usuario
	$scope.delete = function(){
		users.delete(idUser)
		.then(function(res){
			$state.go("users");
		});
	}
})

.controller('users#historial', function($scope, url, users, $stateParams, error, titulo, evaluations, util){


	var idUser = Number($stateParams.id);
	$scope.util = util;

	// Obtener la evaluacion
	evaluations.find(1)
	.then(function(res){
		$scope.evaluation = res.data;
	});


	// Obtener las calificaciones
	users.getCalificaciones(idUser)
	.then(function(res){
		$scope.userTests = res.data;
	});


	// Obtener los datos del usuario
	users.find(idUser)
	.then(function(res){

		// Obtener el usuario
		$scope.user = res.data;

		// Cambiar el titulo de la pagina una vez obtenido el nombre del usuario
		titulo.cambiar("Historial de " + $scope.user.name);
	})
	.catch(function(err){
		error.mostrar(err, "El alumno solicitado no existe.");
	});


});

