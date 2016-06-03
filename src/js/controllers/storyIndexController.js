angular.module('Surface')
    .controller('StoryIndexController', function(Story, StoryUI, $scope, $location, $auth) {
        Story.retrieveAll().then(function() {
            $scope.stories = StoryUI.model;
        });

        $scope.showStory = function(story) {
            $location.path('/stories/' + story.id);
        };

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }
);