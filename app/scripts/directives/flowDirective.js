(function () {
  'use strict';

  angular
    .module('IonicZjddConsumer')
    .directive('flow', flow);

  /** @ngInject */
  function flow() {
    var directive = {
      restrict: 'E',
      templateUrl: 'templates/views/components/flow.html'
    };

    return directive;
  }

})();
