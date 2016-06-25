angular.module('chats', [])

.controller('chats#index', function($scope, url, chats, error){
	
	chats.findAll()
	.then(function(res){
		$scope.chats = res.data;
	})
	.catch(function(err){
		error.mostrar(err, "No se pueden obtener las conversaciones.");
		throw "Error: No se pueden obtener las conversaciones. Esta conectada la API? se esta usando URL: " + url.getUrlBase();
	})

})

.controller('chats#show', function($scope, $stateParams, chats, error, titulo, util){

	$scope.util = util;
	var idChat = Number($stateParams.id);


	$scope.enviandoMensaje = {
		id: 0,
		mostrandoResponder: false,
		enviar: function(){

			var str = $scope.mensajeContenido;

			if(str == undefined || str.length == 0){
				$scope.enviandoMensaje.warning = true;
				return;
			}

			// Bloquear el boton
			$scope.enviandoMensaje.disabled = true;

			// La id del usuario que responde es siempre la 1
			chats.agregarMensaje(idChat, str, 1)
			.then(function(res){

				// Actualizar lista de mensajes con el nuevo mensaje
				$scope.inicializar();

				// Resetear formulario
				$scope.enviandoMensaje.warning = false;
				$scope.enviandoMensaje.disabled = false;
				$scope.enviandoMensaje.mostrandoResponder = false;
				$scope.mensajeContenido = "";
			});
		}
	}


	$scope.inicializar = function(){

		// Obtener informacion detallada del chat
		chats.find(idChat)
		.then(function(res){

			// Obtener el chat
			$scope.chat = res.data;

			$scope.autor_chat = $scope.chat.messages[0].autor;

			// Cambiar el titulo de la pagina una vez obtenido el nombre del chat
			titulo.cambiar($scope.chat.title);
		})
		.catch(function(err){
			error.mostrar(err, "La conversación solicitado no existe.");
		});
	}


	$scope.inicializar();


	
});