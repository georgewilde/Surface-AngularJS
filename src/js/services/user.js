angular.module('Surface')
    .factory('User', function($resource) {
        return $resource('/user/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        })
    }
);