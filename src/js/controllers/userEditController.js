angular.module('Surface')
    .controller('UserEditController', function(User, $scope, $routeParams, $location) {
            $scope.user = User.get({id: $routeParams.id});
            $scope.isSubmitting = false;

            $scope.saveUser = function(user) {
                $scope.isSubmitting = true;
                user.$update().then(function () {
                    $location.path('/users/' + user.id);
                }).finally(function() {
                    $scope.isSubmitting = false;
                })
            };

            $scope.cancelEditUser = function(user) {
                $location.path('/users/' + user.id)
            };
        }
    );