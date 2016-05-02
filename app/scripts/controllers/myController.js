'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('MyCtrl', function ($scope,$state,$rootScope) {

    $scope.$on('$ionicView.beforeEnter', function() {
      $rootScope.tabHidden=false;
    });
    // do something with $scope

  });
