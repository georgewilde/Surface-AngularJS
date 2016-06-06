angular.module('Surface')
    .controller('UserIndexController', function(User, $scope, $location) {
        $scope.users = User.query();

        $scope.showUser = function(user) {
            $location.path('/users/' + user.id);
        };
    }
);