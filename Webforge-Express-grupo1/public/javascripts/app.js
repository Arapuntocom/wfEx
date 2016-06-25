angular.module('webforge', [
	'ui.router', 
	'ngAnimate',
	'users',
	'heuristics',
	'evaluations',
	'questions',
	'courses',
	'chats',
	'practices'
	])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider

	/*
	*	Vistas principales
	*/

	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl',
		title: 'Inicio'
	})

	.state('error', {
		templateUrl: 'templates/error.html',
		controller: 'errorCtrl',
		params: { 
			codigo: null,
			mensaje: null 
		}			
	})

	.state('introduction', {
		url: '/introduction',
		templateUrl: 'templates/introduction.html',
		title: 'Introducción'
	})

	/*
	*	Heuristicas
	*/
	
	.state('heuristics', {
		url: '/heuristics',		
		templateUrl: 'templates/heuristics/index.html',
		controller: 'heuristics#index',
		title: 'Heurísticas de Nielsen'
	})

	/*
	*	Preguntas
	*/

	.state('heuristics_show', {
		url: '/heuristics/:id',
		templateUrl: 'templates/heuristics/show.html',
		controller: 'heuristics#show'
	})
	
	.state('questions',{
		url: '/questions',
		templateUrl: 'templates/questions/index.html',
		controller: 'questions#index',
		title: 'Preguntas'

	})

	/*
	*	Chats
	*/
	.state('chats', {
		url: '/chats',		
		templateUrl: 'templates/chats/index.html',
		controller: 'chats#index',
		title: 'Conversaciones'
	})

	.state('chats_show', {
		url: '/chats/:id',
		templateUrl: 'templates/chats/show.html',
		controller: 'chats#show'
	})

	/*
	*	Evaluaciones
	*/
	
	.state('evaluations', {
		url: '/evaluations',		
		templateUrl: 'templates/evaluations/index.html',
		controller: 'evaluations#index',
		title: 'Evaluaciones'
	})

	.state('evaluations_questions', {
 		url: '/evaluations/:id/:qId',
 		templateUrl: 'templates/evaluations/questions.html',
 		controller: 'evaluations#questions'
 	})

	.state('evaluations_results', {
 		url: '/evaluations/:id',
 		templateUrl: 'templates/evaluations/results.html',
 		controller: 'evaluations#results'
 	})
	
	/*
	*	Practicas
	*/
	
	.state('practices', {
		url: '/practices',		
		templateUrl: 'templates/practices/index.html',
		controller: 'practices#index',
		title: 'Practicas'
	})

	.state('practices_show', {
 		url: '/practices/:id',
 		templateUrl: 'templates/practices/show.html',
 		controller: 'practices#show'
 	})

	/*
	*	Cursos
	*/

	.state('courses', {
		url: '/courses',
		templateUrl: 'templates/courses/index.html',
		controller: 'courses#index',
		title: 'Cursos'
	})

	.state('courses_show', {
		url: '/courses/:id',
		templateUrl: 'templates/courses/show.html',
		controller: 'courses#show'
	})

	/*
	*	Usuarios
	*/

	.state('users', {
		url: '/users',
		templateUrl: 'templates/users/index.html',
		controller: 'users#index',
		title: 'Usuarios'
	})

	.state('users_show', {
		url: '/users/:id',
		templateUrl: 'templates/users/show.html',
		controller: 'users#show'
	})

	.state('users_historial', {
		url: '/users/:id/historial',
		templateUrl: 'templates/users/historial.html',
		controller: 'users#historial'
	});





        	$urlRouterProvider.otherwise('/');

	//$locationProvider.html5Mode(true);
})


// Escucha el cambio de ruta, para asi cambiar de titulo la pagina.
// Para eso la ruta debe tener el atributo 'title'.
// Tambien se puede colocar un titulo mas "personalizado", para eso
// el controlador debe usar el servicio 'titulo', y usar la funcion
// titulo.cambiar("Nuevo titulo");
.run(function($rootScope) {
	$rootScope.$on('$stateChangeSuccess',
	function(event, toState, toParams, fromState, fromParams){ 
		$rootScope.tituloPagina = toState.title;
	 })
});
