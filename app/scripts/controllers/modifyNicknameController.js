'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('ModifyNicknameCtrl', function ($scope,$state,$ionicHistory,$rootScope) {
    var vm=this;
    vm.back=back;

    $rootScope.tabHidden=true;


    function back(){
      $ionicHistory.goBack();
    }


    // do something with $scope

  });
