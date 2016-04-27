(function () {
  'use strict';

  angular
    .module('IonicZjddConsumer')
    .directive('hideTabs', hideTabs);

  /** @ngInject */
  function hideTabs() {
    var directive = {
      restrict: 'A',
      scope: {
        visible: '='
      },
      link: function (scope, element, attrs) {
      }
    };

    return directive;
  }

})();
