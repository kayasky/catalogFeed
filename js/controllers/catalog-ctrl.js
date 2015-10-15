catalogApp.controller('CatalogCtrl', ['$scope', 'assetService', function($scope, assetService) {

  $scope.assets = [];
  $scope.totalHits = 0;

  $scope.getAssets = function(data) {
    var promise = assetService.getAssets({
      data: data
    });
    promise.then(function(response) {
      var originalAssets = response.data.Data;
      originalAssets.forEach(function(asset, index) {
        asset.Item.Images.forEach(function(image, index) {
          if (image.Type === 1) {
            /* Add logic to massage data to pluck out right image size for displaying thumbs */
            asset.Item.thumbImage = image.ImageId;
          }
        });
      });
      $scope.assets = originalAssets;
      $scope.totalHits = response.data.TotalHits;
    }, function(reason) {
      console.log(reason);
    });
  };

  $scope.getAssets();
}]);
