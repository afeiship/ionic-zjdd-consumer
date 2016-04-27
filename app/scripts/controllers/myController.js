'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('MyCtrl', function ($scope,$state,$rootScope) {
    var vm=this;
    vm.toSettings=toSettings;
    $rootScope.tabHidden=false;

    function toSettings(){
      //$state.go('settings');
    }
    // do something with $scope

  });
