angular.module('Surface')
    .directive('surfaceStoryCreatedOn', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'templates/directives/surfaceStoryCreatedOn.html',
            controller: ['StoryUI', '$scope', function(StoryUI, $scope) {
                $scope.story = StoryUI.model;
            }]
        };
    });