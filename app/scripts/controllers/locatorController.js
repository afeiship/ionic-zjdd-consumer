'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('LocatorCtrl', function ($scope, $ionicScrollDelegate) {
    var vm = this;

    vm.keywords = '';

    vm.items = [
      {
        name: '创嘉站总店',
        distance: 0.07
      },
      {
        name: '点点设计店',
        distance: 0.1
      },
      {
        name: '贝岭科技园',
        distance: 0.23
      }
    ];


    function searchByKeywords() {
    }


    // do something with $scope

  });
