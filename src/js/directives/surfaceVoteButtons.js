angular.module('Surface')
    .directive('surfaceVoteButtons', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'js/directives/surfaceVoteButtons.html',
            scope: "=",
            controller: function($scope, Story) {
                $scope.availableVoteValues = [1, 2, 3, 4, 5];

                $scope.addVote = function(story, voteValue, $event) {
                    story.votes += voteValue;

                    $('#' + story.id + 'Vote').numerator({
                        toValue: story.votes,
                        duration: 300,
                        easing: 'linear'
                    });

                    Story.update(story);

                    $($event.target).blur();
                };
            }
        };
    });