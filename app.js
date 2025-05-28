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
    .otherwise({ redirectTo: '/login' });  // mudar para login
});

// Proteção das rotas para exigir login
app.run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function(event, next) {
    const autenticado = localStorage.getItem('autenticado') === 'true';

    // Se tentar acessar qualquer rota diferente de login sem estar autenticado
    if (!autenticado && next.templateUrl !== 'views/login.html') {
      $location.path('/login');
    }

    // Se já autenticado e tentar acessar login, redireciona para home
    if (autenticado && next.templateUrl === 'views/login.html') {
      $location.path('/');
    }
  });
});
