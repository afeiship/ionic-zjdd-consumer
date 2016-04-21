'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('SettingsCtrl', function ($scope, $ionicActionSheet) {
    var vm = this;
    vm.showModal = showModal;

    function showModal() {

      var hideSheet = $ionicActionSheet.show({
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
