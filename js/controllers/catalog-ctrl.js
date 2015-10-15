catalogApp.controller('catalogCtrl', ['$scope', 'assetService', function($scope, assetService) {

  $scope.getAssets = function(data) {
    var promise = assetService.getAssets({
      data: data
    });
    promise.then(function(response) {
      console.log(response);
    }, function(reason) {
      console.log(reason);
    });
  };

  $scope.getAssets();
}]);
