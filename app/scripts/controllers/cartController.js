'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('IonicZjddConsumer')
  .controller('CartCtrl', function ($scope, $rootScope) {

    var vm = this;
    vm.root=$rootScope;
    vm.del = del;

    vm.cartItems = ($rootScope.cartItems);

    function del(inItem) {
      var items = angular.copy(vm.cartItems);
      vm.cartItems.forEach(function (item, index) {
        if (item.id === inItem.id) {
          items.splice(index, 1);
        }
      });
      //$rootScope.cartItems = vm.cartItems = items;
    }


  });
