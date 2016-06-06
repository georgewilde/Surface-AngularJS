angular.module('Surface')
    .service('Story', function($http, StoryUI) {
        var baseUrl = '/story',

        handleRetrieveSuccess = function(result) {
            StoryUI.model = result.data;
        },

            handleRetrieveError = function(result) {
                console.log(result);
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

        this.delete = function(story) {
            return $http.delete(baseUrl + '/' + story.id, story);
        };
    })
    .service('StoryUI', [function() {
        return {
            model: {}
        }
    }]
);