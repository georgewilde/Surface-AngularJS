angular.module('Surface')
    .controller('StoryIndexController', function(Story, StoryUI, $scope, $location) {
        Story.retrieveAll().then(function() {
            $scope.stories = StoryUI.model;
        });

        $scope.availableVoteValues = [1, 2, 3, 4, 5];

        $scope.showStory = function(story) {
            $location.path('/stories/' + story.id);
        };

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
);