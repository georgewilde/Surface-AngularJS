angular.module('Surface')
    .controller('LoginController', function($scope, $auth) {
        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }
);