angular.module('Surface')
    .controller('StoryShowController', function(Story, StoryUI, $scope, $routeParams, $location) {
        Story.retrieve($routeParams.id).then(function() {
            $scope.story = StoryUI.model;
        });
        
        $scope.isDeleting = false;

        $scope.deleteStory = function(story) {
            $scope.isDeleting = true;
            story.$remove().then(function() {
                $scope.isDeleting = false;
                $location.path('/stories');
            });
        };
    }
);