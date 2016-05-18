angular.module('Surface')
    .service('Story', ['$http', 'StoryUI', function($http, StoryUI){
        this.retrieveAll = function() {
                return $http({
                method: 'GET',
                url: '/story'
            }).then(function(result){
                StoryUI.model = result.data;
            })
        };

        this.retrieve = function(id) {
            return $http({
                method: 'GET',
                url: '/story',
                params: {'id': id}
            }).then(function(result){
                StoryUI.model = result.data;
            })
        };
    }])
    .service('StoryUI', [function() {
        return {
            model: {}
        }
    }]);


//_.each($scope.stories, function(story) {
//    story.createdMoment = moment(story.createdDatetime);
//    story.createdDatetimeUK = story.createdMoment.format("Do MMMM YYYY [at] h:ma");
//});