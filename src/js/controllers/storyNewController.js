angular.module('Surface')
    .controller('StoryNewController', function(Story, $scope, $location) {
        // TODO: Find out how to get an instance of the Story model now this the service is using $http.
        $scope.story = new Story();

        $scope.isSubmitting = false;

        $scope.saveNewStory = function(story) {
            $scope.isSubmitting = true;

            story.votes = 0;
            story.createdDatetime = moment().format('YYYY-MM-DD HH:mm:ss');

            Story.save().then(function() {
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