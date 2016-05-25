angular.module('Surface', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'angular-velocity',
    'relativeDate'
])
    .constant('SurfaceConstants', {
        'dateTimeUk': "d MMMM yyyy 'at' h:ma"
    }
);