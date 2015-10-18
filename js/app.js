var catalogApp = angular.module('catalogApp', []);

catalogApp.filter('readableDuration', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])
