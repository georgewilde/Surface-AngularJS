angular.module('Surface')
    .controller('StoryNewController', function(Story, $scope, $location) {
        $scope.story = Story;
        $scope.isSubmitting = false;

        $scope.saveNewStory = function(story) {
            $scope.isSubmitting = true;

            story.votes = 0;
            story.createdDatetime = new Date();
            story.userId = (Math.floor(Math.random() * 4) + 1);

            Story.save(story).then(function() {
                $location.path('/');
            }).finally(function() {
                $scope.isSubmitting = false;
            });
        };

        $scope.cancelNewStory = function() {
            $location.path('/');
        };
    }
);