angular.module('Surface')
    .controller('CommentNewController', function(Comment, $scope, $uibModalInstance) {
        $scope.comment = new Comment();
        $scope.isSubmitting = false;

        $scope.saveNewComment = function(comment) {
            $scope.isSubmitting = true;

            comment.createdDatetime = new Date();
            comment.storyId = 999;
            comment.userId = 999;

            Comment.save(comment).then(function() {
                // $location.path('/');
            }).finally(function() {
                $scope.isSubmitting = false;
            });
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        }
    );