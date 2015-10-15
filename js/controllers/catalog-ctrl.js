catalogApp.controller('catalogCtrl', ['$scope', 'assetService', function($scope, assetService) {

  $scope.assets = [];
  $scope.totalHits = 0;

  $scope.getAssets = function(data) {
    var promise = assetService.getAssets({
      data: data
    });
    promise.then(function(response) {
      $scope.assets = response.Data;
      $scope.totalHits = response.TotalHits;
    }, function(reason) {
      console.log(reason);
    });
  };

  $scope.getAssets();
}]);
