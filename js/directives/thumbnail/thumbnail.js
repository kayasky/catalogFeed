catalogApp.directive('assetThumb', function() {

  var tpl = '<a href="#" class="thumbnail">';
  tpl += '<img ng-src="{{asset.Item.thumbImage}}" alt="{{asset.Item.Title}}" class="img-rounded" />';
  tpl += '<div class="thumb-overlay img-rounded"><h4 class="text-center">{{ asset.Item.Title }}';
  tpl += '<small class="clearfix">{{ asset.Item.ReleaseYear }}</small>';
  tpl += '<small class="clearfix">{{ asset.Item.RunTimeSec | readableDuration | date:\'HH:mm\' }}</small>';
  tpl += '</h4></div>';
  tpl += '</a>';

  var linkFn = function ($scope, $elem, attrs) {

  }

  return {
    restrict: 'E',
    template: tpl,
    scope: {
      asset: '='
    },
    link: linkFn
  };
});
