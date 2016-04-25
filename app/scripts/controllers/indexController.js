'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('IndexCtrl', function ($scope, $ionicScrollDelegate, $ionicModal) {
    var vm = this;
    var handle = $ionicScrollDelegate.$getByHandle('indexIonContent');
    vm.onContentScroll = onContentScroll;
    vm.showLocator = showLocator;
    vm.scrollOpacity = 0;

    $scope.locator = {
      keywords: '',
      items: [
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
      ]
    };


    function onContentScroll($event) {
      var position = handle.getScrollPosition();
      var opacity = position.top / 150;

      opacity = opacity < 0 ? 0 : opacity;
      opacity = opacity > 1 ? 1 : opacity;

      //notify bg change:
      vm.scrollOpacity = opacity;
      $scope.$apply('scrollOpacity');
    }


    function showLocator() {

      $ionicModal.fromTemplateUrl('templates/views/locator.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });


      $scope.openModal = function () {
        $scope.modal.show();
      };
      $scope.closeModal = function () {
        $scope.modal.hide();
      };
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function () {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function () {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function () {
        // Execute action
      });
    }

  });
