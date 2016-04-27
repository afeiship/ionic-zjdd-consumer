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

    function toSettings(){
      //$state.go('settings');
    }



    $scope.$on('$ionicView.beforeEnter', function() {
      $rootScope.tabHidden=false;
    });
    // do something with $scope

  });
