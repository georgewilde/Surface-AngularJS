angular.module('Surface')
    .controller('StoryIndexController', [
        'Story', 'StoryUI', '$scope', function(Story, StoryUI, $scope) {
            Story.retrieveAll().then(function() {
                $scope.stories = StoryUI.model;
            });
        }
    ]);