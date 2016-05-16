angular.module("Surface").config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/stories'
        })
        .when('/stories', {
            templateUrl: 'templates/stories/index.html',
            controller: 'StoryIndexController'
        })
        .when('/stories/new', {
            templateUrl: 'templates/stories/new.html',
            controller: 'StoryNewController'
        })
        .when('/stories/:id', {
            templateUrl: 'templates/stories/show.html',
            controller: 'StoryShowController'
        })
        .when('/stories/:id/edit', {
            templateUrl: 'templates/stories/edit.html',
            controller: 'StoryEditController'
        })
}]);