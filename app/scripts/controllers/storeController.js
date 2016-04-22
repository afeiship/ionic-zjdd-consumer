'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('StoreCtrl', function ($scope, AppService) {
    var vm = this;
    vm.categories = [];
    vm.itemClick = itemClick;

    AppService.getCategory().success(function (inResp) {
      var list = inResp.data;
      _processCategories(list);
      vm.categories = list;
    });


    function itemClick(inItem) {
      vm.categories.forEach(function(item){
        item.active=false;
      });
      inItem.active=true;
    }

    function _processCategories(inItems) {
      inItems.forEach(function (item, index) {
        angular.extend(item, {
          active: !index
        });
      });
    }

  });
