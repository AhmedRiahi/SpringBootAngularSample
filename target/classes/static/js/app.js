var SampleApp = angular.module('SampleApp',['ngResource','ui.router','ui.bootstrap','ngToast']);

// Dashboard views configuration
SampleApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('home');

	$stateProvider
	.state('home',{
		url 		: '/home',
		templateUrl	: 'views/home.html',
		controller 	: HomeController
	}).state('about',{
		url 		: '/about',
		templateUrl	: 'views/about.html',
		controller 	: AboutController
	});
});


// ************** Controllers Management **************

SampleApp.controller('NavbarController',NavbarController);
SampleApp.controller('ChatController',HomeController);



// ************** Services Management **************
var serverHost 	= window.location.hostname;
var serverURL 	= 'http://'+serverHost+':9000/';


SampleApp.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };
});