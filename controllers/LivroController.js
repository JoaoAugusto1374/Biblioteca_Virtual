app.controller('LivroController', function($scope, $http, $routeParams) {
  const id = $routeParams.id;

  $scope.livro = null;
  $scope.autor = null;
  $scope.erro = false;

  // Buscar os dados do livro
  $http.get(`https://openlibrary.org/works/${id}.json`)
    .then(function(res) {
      $scope.livro = res.data;

      // Buscar o nome do autor
      if ($scope.livro.authors && $scope.livro.authors.length > 0) {
        const autorKey = $scope.livro.authors[0].author.key;
        $http.get(`https://openlibrary.org${autorKey}.json`)
          .then(function(response) {
            $scope.autor = response.data.name;
          })
          .catch(() => $scope.autor = 'Desconhecido');
      }
    })
    .catch(function(err) {
      console.error('Erro ao buscar livro:', err);
      $scope.erro = true;
    });
});
