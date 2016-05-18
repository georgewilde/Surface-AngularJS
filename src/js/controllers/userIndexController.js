angular.module('Surface')
    .controller('UserIndexController', function(User, $scope) {
        $scope.users = User.query();
    }
);