app.controller('LivroController', function($scope, $http, $routeParams) {
  const id = $routeParams.id.replace('/works/', '');
  $http.get(`https://openlibrary.org/works/${id}.json`).then(function(res) {
    $scope.livro = res.data;
  });
});
