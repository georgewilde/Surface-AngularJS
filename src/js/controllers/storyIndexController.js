angular.module('Surface')
    .controller('StoryIndexController', [
        'Story', '$scope', function(Story, $scope) {
            $scope.stories = Story.query(function() {
                _.each($scope.stories, function(story) {
                    story.createdMoment = moment(story.createdDatetime);
                });
            });
        }
    ]);