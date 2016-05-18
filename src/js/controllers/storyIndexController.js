angular.module('Surface')
    .controller('StoryIndexController', function(Story, StoryUI, $scope) {
            Story.retrieveAll().then(function() {
                $scope.stories = StoryUI.model;
            });
        }
    );