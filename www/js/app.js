
var app = angular.module('starter', ['ionic']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
            .state('home', {
                url: '/',
        templateUrl: 'views/home.html'
    })
    
            .state('explore', {
                url: '/explore',
        templateUrl: 'views/explore.html'
    })
    
            .state('history', {
                url: '/history',
        templateUrl: 'views/history.html'
    })
    
            .state('land', {
                url: '/land',
        templateUrl: 'views/land.html'
    })
    
            .state('craic', {
                url: '/craic',
        templateUrl: 'views/craic.html'
    });
    

    $urlRouterProvider.otherwise("/");
});


