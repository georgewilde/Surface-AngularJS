angular.module('Surface')
    .controller('StoryEditController', function(Story, StoryUI, User, $scope, $routeParams, $location) {
        Story.retrieve($routeParams.id).then(function() {
            $scope.story = StoryUI.model;
        });

        $scope.users = User.query();
        $scope.isSubmitting = false;

        $scope.saveStory = function(story) {
            $scope.isSubmitting = true;
            Story.update(story).then(function () {
                $location.path('/stories/' + story.id);
            }).finally(function() {
                $scope.isSubmitting = false;
            })
        };

        $scope.cancelEditStory = function(story) {
            $location.path('/stories/' + story.id)
        };
    }
);