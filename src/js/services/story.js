angular.module('Surface')
    .service('Story', function($http, StoryUI) {
        var baseUrl = '/story',

            handleRetrieveSuccess = function(result) {
                addAdditionalData(result.data);
                StoryUI.model = result.data;
            },

            handleRetrieveError = function(result) {
                console.log(result);
            },

            addAdditionalData = function(result) {
                if (Array == result.constructor) {
                    _.each(result, function(story) {
                        addCreatedDateFormats(story);
                    });
                }
                else {
                    addCreatedDateFormats(result);
                }
            },

            addCreatedDateFormats = function(story) {
                story.createdMoment = moment(story.createdDatetime);
                story.createdDatetimeUK = story.createdMoment.format("Do MMMM YYYY [at] h:ma");
            };

        this.retrieveAll = function() {
            return $http.get(baseUrl).then(handleRetrieveSuccess, handleRetrieveError);
        };

        this.retrieve = function(id) {
            return $http.get(baseUrl + '/' + id).then(handleRetrieveSuccess, handleRetrieveError);
        };

        this.save = function(story) {
            return $http.post(baseUrl, story);
        };

        this.update = function(story) {
            return $http.put(baseUrl + '/' + story.id, story);
        };
    })
    .service('StoryUI', [function() {
        return {
            model: {}
        }
    }]);


