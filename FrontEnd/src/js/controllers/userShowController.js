angular.module('Surface')
    .controller('UserShowController', function(User, $scope, $routeParams, $location) {
        $scope.user = User.get({id: $routeParams.id});
        $scope.isDeleting = false;

        $scope.deleteUser = function(user) {
            $scope.isDeleting = true;
            user.$remove().then(function() {
                $scope.isDeleting = false;
                $location.path('/users');
            })
        };
    }
);