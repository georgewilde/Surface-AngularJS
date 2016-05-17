angular.module('Surface')
    .controller('StoryNewController', [
        'Story', '$scope', '$location', function(Story, $scope, $location) {
            $scope.story = new Story();
            $scope.isSubmitting = false;

            $scope.saveNewStory = function(story) {
                $scope.isSubmitting = true;

                story.votes = 0;
                story.createdDatetime = moment().format('YYYY-MM-DD HH:mm:ss');

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