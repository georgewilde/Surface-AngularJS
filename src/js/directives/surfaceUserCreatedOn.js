angular.module('Surface')
    .directive('surfaceUserCreatedOn', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfaceUserCreatedOn.html',
            scope: "=",
            controller: function($scope, SurfaceConstants) {
                $scope.constants = SurfaceConstants;
            }
        };
    });