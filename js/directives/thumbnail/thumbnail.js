catalogApp.directive('assetThumb', function() {

  var linkFn = function ($scope, $elem, attrs) {

  }

  return {
    restrict: 'E',
    template: '<a href="#" class="thumbnail"><img ng-src="{{asset.Item.thumbImage}}" alt="{{asset.Item.Title}}" class="img-rounded"></a>',
    scope: {
      asset: '='
    },
    link: linkFn
  };
});
