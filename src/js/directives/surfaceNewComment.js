angular.module('Surface')
    .directive('surfaceNewComment', function() {
        return {
            replace: true,
            restrict: 'E',
            scope: '=',
            templateUrl: 'js/directives/surfaceNewComment.html',
            controller: function($scope, Comment) {
                $scope.comment = new Comment();
                $scope.isSubmitting = false;

                $scope.saveNewComment = function() {
                    $scope.comment.createdDatetime = new Date();
                    $scope.comment.storyId = $scope.story.id;
                    $scope.comment.userId = (Math.floor(Math.random() * 4) + 1);
                    $scope.comment.$save();

                    $scope.comments.unshift(angular.copy($scope.comment));
                    $scope.comment = new Comment();
                };
            }
        };
    }
);