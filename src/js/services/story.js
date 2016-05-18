angular.module('Surface')
    .service('Story', ['$http', 'StoryUI', function($http, StoryUI){
        var retrieveUrl = '/story',

            handleRetrieveSuccess = function(result) {
                addCreatedDateFormats(result.data);
                StoryUI.model = result.data;
            },

            handleRetrieveError = function(result) {
                console.log(result);
            },

            addCreatedDateFormats = function(stories) {
                _.each(stories, function(story) {
                    story.createdMoment = moment(story.createdDatetime);
                    story.createdDatetimeUK = story.createdMoment.format("Do MMMM YYYY [at] h:ma");
                });
            };

        this.retrieveAll = function() {
            return $http.get(retrieveUrl).then(handleRetrieveSuccess, handleRetrieveError);
        };

        this.retrieve = function() {
            return $http.get(retrieveUrl + 'id=' + id).then(handleRetrieveSuccess, handleRetrieveError);
        };
    }])
    .service('StoryUI', [function() {
        return {
            model: {}
        }
    }]);


