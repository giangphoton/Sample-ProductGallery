app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    console.log('test photo ctrl');

    photos.fetchData()
        .then(function (response) {
            console.log(response);
            $scope.detail = response.data[$routeParams.id];
      console.log('test photo ctrl');
    }, function (error) {
      $scope.status = 'Unable to load photo detail: ' + error.message;
    });

}]);
