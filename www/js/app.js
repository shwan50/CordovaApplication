
var app = angular.module('starter', ['ionic']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
            .state('home', {
                url: '/',
        templateUrl: 'views/home.html'
    })
            
            .state('afterHome',{
                url: '/afterHome',
        templateUrl: 'views/afterHome.html',
        controller: 'ahcontrl'
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


app.controller('ahcontrl', function($scope){
    $scope.$on('$ionicView.enter', function(){
        var country = window.localStorage['country'] || 'Ireland';
        document.getElementById('AFTERHOME_countrySPAN').innerHTML = country;
        var city = window.localStorage['city'] || 'Cork';
        document.getElementById('AFTERHOME_citySPAN').innerHTML = city;
    });
});

