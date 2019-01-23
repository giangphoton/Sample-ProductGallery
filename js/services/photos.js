app.factory('photos', ['$http', function($http) {
  var urlBase = 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json';
  var photos = {};

  // dinh nghia ham fetchData() lay url anh de hien ra gallery
  photos.fetchData = function() {
    return $http.get(urlBase);
  };

// dinh nghia ham fetchDetail() lay detail anh de hien ra products information
  // photos.fetchDetail = function() {
  //   return $http.get(urlBase);
  // }

  return photos;
}]);
