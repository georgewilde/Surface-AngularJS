angular.module('Surface')
    .directive('surfacePageNav', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfacePageNav.html',
            controller: function($scope, $location) {
                $scope.isCurrentPage = function(name) {
                    return new RegExp('/' + name + '($|/)').test($location.path());
                };
            }
        };
    }
);