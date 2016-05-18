angular.module('Surface')
    .controller('StoryIndexController', function(Story, StoryUI, $scope, $location) {
        Story.retrieveAll().then(function() {
            $scope.stories = StoryUI.model;
        });

        $scope.showStory = function(story) {
            $location.path('/stories/' + story.id);
        };
    }
);