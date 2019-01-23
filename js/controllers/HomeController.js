app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {

    photos.fetchData()
    .then(function (response) {
      $scope.photos = response.data;
    }, function (error) {
      $scope.status = 'Unable to load photo: ' + error.message;
    });
}]);
