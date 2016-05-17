angular.module('Surface')
    .controller('UserIndexController', [
        'User', '$scope', function(User, $scope) {
            $scope.users = User.query();
        }
    ]);