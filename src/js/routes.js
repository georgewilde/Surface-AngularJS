angular.module("Surface").config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/stories'
        })
        .when('/stories', {
            templateUrl: 'templates/stories/index.html',
            controller: 'StoryIndexController'
        })
}]);