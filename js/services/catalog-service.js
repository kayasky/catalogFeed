catalogApp.service('assetService', ['$http', '$q', function($http, $q) {

  this.getAssets = function(id) {
    return $http({
      method: 'GET',
      url: '/getAssets'
    });
  };

}]);
