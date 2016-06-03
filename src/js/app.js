angular.module('Surface', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'angular-velocity',
    'relativeDate',
    'ui.bootstrap',
    'angular-confirm',
    'satellizer'
])
    .constant('SurfaceConstants', {
        'dateTimeUk': "d MMMM yyyy 'at' h:ma",
        'dateUk': "d MMMM yyyy"
    }
)
    .config(function($authProvider) {
        $authProvider.google({
            clientId: '207963012905-pedp76ru8d4fl2hc6dii6m3m9gqn89rv.apps.googleusercontent.com'
        });
    }
);