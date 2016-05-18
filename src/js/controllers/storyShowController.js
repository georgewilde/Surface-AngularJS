angular.module('Surface')
    .controller('StoryShowController', function(Story, $scope, $routeParams, $location) {
            $scope.story = Story.get({id: $routeParams.id});
            $scope.isDeleting = false;

            $scope.deleteStory = function(story) {
                $scope.isDeleting = true;
                story.$remove().then(function() {
                    $scope.isDeleting = false;
                    $location.path('/stories');
                })
            }
        }
    );