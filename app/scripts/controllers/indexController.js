'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('IndexCtrl', function ($scope,$ionicPlatform, $rootScope, $ionicScrollDelegate, $ionicLoading, $ionicModal, $timeout, AppService) {
    var vm = this;
    var handle = $ionicScrollDelegate.$getByHandle('indexIonContent');
    vm.onContentScroll = onContentScroll;
    vm.showLocator = showLocator;
    vm.scrollOpacity = 0;
    vm.newList = [];
    vm.recommendList = [];
    vm.hotList = [];
    $scope.itemClick = itemClick;
    $scope.districtItem = {
      name: '点点设计店',
      distance: 0.1
    };

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


    $ionicLoading.show({
      template: '<div class="load-a" style="color:#fff;"><ion-spinner icon="ios"></ion-spinner></div>'
    });
    $ionicPlatform.ready(function(){
      $ionicLoading.hide();
    });


    init();


    $scope.$watch(function () {
      return vm.newList;
    }, function (newValue, oldValue) {
      $rootScope.cartItems = getActiveItems(newValue);
      updateBadges();
    }, true);


    function init() {
      AppService.getIndexList().success(function (inResp) {
        var data = inResp.data;
        vm.newList = processNumberList(data['new']);
        vm.recommendList = processNumberList(data['recommend']);
        vm.hotList = processNumberList(data['hot']);
      });
    }


    function onContentScroll($event) {
      var position = handle.getScrollPosition();
      var opacity = position.top / 150;

      opacity = opacity < 0 ? 0 : opacity;
      opacity = opacity > 1 ? 1 : opacity;

      //notify bg change:
      vm.scrollOpacity = opacity;
      $scope.$apply('scrollOpacity');
    }

    function itemClick(inItem) {
      $scope.districtItem = inItem;
      $scope.closeModal();
    }


    function processNumberList(inData) {
      return inData.map(function (item) {
        item.__ui_value__ = 0;
        return item;
      });
    }


    function showLocator() {
      //todo:optimize with iconloadingConfig
      $ionicLoading.show({
        template: '<div class="load-a" style="color:#fff;"><ion-spinner icon="ios"></ion-spinner></div>'
      });
      $ionicModal.fromTemplateUrl('templates/views/locator.html', {
        scope: $scope,
        animation: 'slide-in-up'/*slide-in-up|slide-left-right-ios7|fade-in-out*/
      }).then(function (modal) {
        $scope.modal = modal;
        $scope.modal.show();


        //todo:abstracto to common setting.
        $timeout(function () {
          $ionicLoading.hide();
        }, 1000);
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


    function getActiveItems(inItems) {
      return inItems.filter(function (item) {
        return item.__ui_value__ > 0;
      });
    }

    function updateBadges() {
      var val;
      var items = $rootScope.cartItems;
      var length = 0;
      var total = 0;
      items.forEach(function (item) {
        val = item.__ui_value__;
        length += val;
        total += val * item.price;
      });
      $rootScope.cartBadges = length;
      $rootScope.total = total;
    }

  });
