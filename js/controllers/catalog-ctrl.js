catalogApp.controller('CatalogCtrl', ['$scope', 'assetService', function($scope, assetService) {

  $scope.assets = [];
  $scope.currentPage = 0;
  $scope.totalPages = 1;
  $scope.pageNumbers = [];
  $scope.pageSize = 20;
  $scope.totalHits = 0;
  $scope.pageOffset = 0;

  var initPagination = function(totalPages) {
    var pageNumbers = [];
    for (var i = 0; i < totalPages; i++) {
      /* Add in the page number, offset it by 1 */
      pageNumbers.push(i + 1);
    }
    return pageNumbers;
  };

  var parseAssets = function(assetData) {
    assetData.forEach(function(asset, index) {
      asset.Item.Images.forEach(function(image, index) {
        if (image.Type === 1) {
          /* Add logic to massage data to pluck out right image size for displaying thumbs */
          asset.Item.thumbImage = image.ImageId;
        }
      });
    });
    return assetData;
  };

  var getAssets = function(data) {
    var promise = assetService.getAssets({
      data: data
    });
    promise.then(function(response) {
      $scope.assets = parseAssets(response.data.Data);
      $scope.totalHits = response.data.TotalHits;
      $scope.totalPages = Math.ceil($scope.assets.length / $scope.pageSize);
      $scope.pageNumbers = initPagination($scope.totalPages);
    }, function(reason) {
      console.log(reason);
    });
  };

  $scope.gotoPage = function(page) {
    $scope.pageOffset = (page - 1) * $scope.pageSize;
  }

  getAssets();
}]);
