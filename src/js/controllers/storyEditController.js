angular.module('Surface')
    .controller('StoryEditController', [
        'Story', 'User', '$scope', '$routeParams', '$location', function(Story, User, $scope, $routeParams, $location) {
            $scope.story = Story.get({id: $routeParams.id});
            $scope.users = User.query();
            $scope.isSubmitting = false;

            $scope.saveStory = function(story) {
                $scope.isSubmitting = true;
                story.$update().then(function () {
                    $location.path('/stories/' + story.id);
                }).finally(function() {
                    $scope.isSubmitting = false;
                })
            };

            $scope.cancelEditStory = function(story) {
                $location.path('/stories/' + story.id)
            };
        }
    ]);