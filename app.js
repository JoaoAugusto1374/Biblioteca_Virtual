var app = angular.module('bibliotecaApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/livro/:id', {
      templateUrl: 'views/livro.html',
      controller: 'LivroController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .otherwise({ redirectTo: '/' });
});
