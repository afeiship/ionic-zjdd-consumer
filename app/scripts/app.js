'use strict';

/**
 * @ngdoc overview
 * @name IonicZjddConsumer
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('IonicZjddConsumer', ['ionic', 'ngCordova', 'ngResource'])

  .run(function ($ionicPlatform, $rootScope) {

    $rootScope.cartItems = [];
    $rootScope.cartBadges = 0;
    $rootScope.total = 0;
    $rootScope.tabHidden = false;

    $ionicPlatform.ready(function () {
      // save to use plugins here
      ionic.Platform.fullScreen();
      if (window.StatusBar) {
        return StatusBar.hide();
      }
    });

    // add possible global event handlers here

  })

  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'templates/main.html'
      })
      .state('main.index', {
        url: '/index',
        views: {
          'index': {
            templateUrl: 'templates/views/index.html',
            controller: 'IndexCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.locator', {
        url: '/locator',
        views: {
          'index': {
            templateUrl: 'templates/views/locator.html',
            controller: 'LocatorCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.store', {
        url: '/store',
        views: {
          'store': {
            templateUrl: 'templates/views/store.html',
            controller: 'StoreCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.goods', {
        url: '/goods',
        views: {
          'goods': {
            templateUrl: 'templates/views/goods.html',
            controller: 'GoodsCtrl'
          }
        }
      })
      .state('main.cart', {
        url: '/cart',
        views: {
          'cart': {
            templateUrl: 'templates/views/cart.html',
            controller: 'CartCtrl',
            controllerAs:'vm'
          }
        }
      })
      .state('main.my', {
        url: '/my',
        views: {
          'my': {
            templateUrl: 'templates/views/my.html',
            controller: 'MyCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'my': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.nickname', {
        url: '/nickname',
        views: {
          'my': {
            templateUrl: 'templates/views/modify-nickname.html',
            controller: 'ModifyNicknameCtrl',
            controllerAs: 'vm'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/main/index');
  });


