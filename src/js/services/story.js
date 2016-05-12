angular.module('Surface')
    .factory('Story', [
       '$resource', function($resource) {
            return $resource('/story/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            })
        }
    ]);