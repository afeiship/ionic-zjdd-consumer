(function () {
  'use strict';

  angular
    .module('IonicZjddConsumer')
    .directive('numberSpinner', flow);

  /** @ngInject */
  function flow() {
    var directive = {
      restrict: 'E',
      replace:true,
      scope: {
        value: '='
      },
      templateUrl: 'templates/views/components/number-spinner.html',
      link: function (scope, element, attrs) {
//        scope.value = 0;

        scope.plus=function(){
          scope.value++;
        };

        scope.minus=function(){
          if(scope.value){
            scope.value--;
          }
        };
      }
    };

    return directive;
  }

})();
