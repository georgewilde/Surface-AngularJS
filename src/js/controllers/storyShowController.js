angular.module('Surface')
    .controller('StoryShowController', function(Story, StoryUI, Comment, $scope, $routeParams, $location) {
        Story.retrieve($routeParams.id).then(function() {
            $scope.story = StoryUI.model;
        });

        $scope.comments = Comment.byStory({storyId: $routeParams.id});
        $scope.isDeleting = false;

        $scope.deleteStory = function(story) {
            $scope.isDeleting = true;
            Story.delete(story).then(function() {
                $scope.isDeleting = false;
                $location.path('/stories');
            });
        };
    }
);