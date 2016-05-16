angular.module('Surface')
    .controller('StoryNewController', [
        'Story', '$scope', '$location', function(Story, $scope, $location) {
            $scope.story = new Story();
            $scope.isSubmitting = false;

            $scope.saveNewStory = function(story) {
                $scope.isSubmitting = true;

                story.$save().then(function() {
                    $location.path('/');
                }).finally(function() {
                    $scope.isSubmitting = false;
                });
            };

            $scope.cancelNewStory = function() {
                $location.path('/');
            };
        }
    ]);