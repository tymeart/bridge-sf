'use strict';

/**
 * @ngdoc overview
 * @name bridgesfApp
 * @description
 * # bridgesfApp
 *
 * Main module of the application.
 */
angular
  .module('bridgesfApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/route', {
        templateUrl: 'views/route.html',
        controller: 'RouteCtrl',
        controllerAs: 'route'
      })
      .when('/index', {
        templateUrl: 'views/index.html',
        controllerAs: 'index'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
