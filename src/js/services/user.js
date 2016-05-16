angular.module('Surface')
    .factory('User', [
       '$resource', function($resource) {
            return $resource('/user/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            })
        }
    ]);