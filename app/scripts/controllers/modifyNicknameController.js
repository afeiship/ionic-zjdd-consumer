'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('ModifyNicknameCtrl', function ($scope,$state,$ionicHistory) {
    var vm=this;
    vm.back=back;


    function back(){
      $ionicHistory.goBack();
    }

    // do something with $scope

  });
