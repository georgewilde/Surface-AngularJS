angular.module('Surface')
    .controller('StoryIndexController', [
        'Story', '$scope', function(Story, $scope) {
            $scope.stories = Story.query();
        }
    ]);