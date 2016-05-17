angular.module('Surface')
    .directive('surfacePageNav', function() {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'templates/directives/surfacePageNav.html',
                controller: ['$scope', '$location', function($scope, $location) {
                    $scope.isCurrentPage = function(name) {
                        return new RegExp('/' + name + '($|/)').test($location.path());
                    };
                }]
            };
        }
    );