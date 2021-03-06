'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('SettingsCtrl', function ($scope, $ionicActionSheet, $ionicHistory, $rootScope) {
    var vm = this;
    vm.showModal = showModal;
    vm.back = back;

    $rootScope.tabHidden = true;

    function back() {
      $ionicHistory.goBack();
    }

    function showModal() {

      $ionicActionSheet.show({
        buttons: [
          {text: '拍照'},
          {text: '从相册选择'}
        ],
        titleText: '上传照片',
        cancelText: '取消',
        cancel: function () {
          console.log('I have canceled!');
        },
        buttonClicked: function (index) {
          return true;
        }
      });
    }


  });
