app.controller('LoginController', function($scope, $location) {
  $scope.login = function() {
    if ($scope.usuario === 'admin' && $scope.senha === '123') {
      localStorage.setItem('autenticado', 'true');
      $location.path('/');
    } else {
      alert('Usuário ou senha inválido');
    }
  };
});
