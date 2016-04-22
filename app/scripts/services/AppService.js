'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.service:ExampleService
 * @description
 * # ExampleService
 */
angular.module('IonicZjddConsumer')
  // use factory for services
  .factory('AppService', function($http, $timeout, $q) {



    var getCategory = function() {
      return $http({
          url: './_mock/category.json',
          method: 'GET'
        })
    };

    // public api
    return {
      getCategory: getCategory
    };

  });
