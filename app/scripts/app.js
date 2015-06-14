(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name todoApp
   * @description
   * # todoApp
   *
   * Main module of the application.
   */
  angular
    .module('todoApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('ls');
    }])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'ToDoController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'contact.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
}());
