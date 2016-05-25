angular.module('Surface', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'angular-velocity',
    'relativeDate',
    'ui.bootstrap',
    'angular-confirm'
])
    .constant('SurfaceConstants', {
        'dateTimeUk': "d MMMM yyyy 'at' h:ma",
        'dateUk': "d MMMM yyyy"
    }
);