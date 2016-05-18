angular.module('Surface')
    .directive('surfaceStoryCreatedOn', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'templates/directives/surfaceStoryCreatedOn.html',
            controller: ['StoryUI', '$scope', function(StoryUI, $scope) {
                console.log(StoryUI);
                $scope.story = StoryUI.model;
            }]
        };
    });