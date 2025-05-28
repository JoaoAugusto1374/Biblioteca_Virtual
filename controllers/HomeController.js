app.controller('HomeController', function($scope, $http, $location) {
  $scope.carregando = true;
  $scope.livros = [];
  $scope.generos = [];
  $scope.autores = [];

  $http.get('https://openlibrary.org/search.json?q=programming').then(function(res) {
    $scope.livros = res.data.docs;
    $scope.generos = [...new Set($scope.livros.flatMap(l => l.subject || []))];
    $scope.autores = [...new Set($scope.livros.map(l => l.author_name ? l.author_name[0] : ''))];
    $scope.carregando = false;
  }).catch(function() {
    $scope.erro = true;
    $scope.carregando = false;
  });

  // Função logout que limpa o localStorage e redireciona para /login
  $scope.logout = function() {
    localStorage.removeItem('autenticado');
    $location.path('/login');
  };
});
