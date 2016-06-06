angular.module('Surface')
    .factory('Comment', function($resource) {
        return $resource('/comment/:id', {
            id: '@id',
            storyId: '@storyId'
        }, {
            update: {
                method: 'PUT'
            },
            byStory: {
                method: 'GET',
                url: '/comment/story/:storyId',
                isArray: true
            }
        });
    }
);