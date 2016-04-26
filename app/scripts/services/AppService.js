'use strict';

/**
 * @ngdoc function
 * @name IonicZjddConsumer.service:ExampleService
 * @description
 * # ExampleService
 */
angular.module('IonicZjddConsumer')
  // use factory for services
  .factory('AppService', function ($http, $timeout, $q,$rootScope) {


    var getCategory = function () {
      return $http({
        url: './_mock/category.json',
        method: 'GET'
      });
    };

    var getDetail = function (inId) {
      return $http({
        url: './_mock/detail.json',
        method: 'GET'
      });
    };

    var getIndexList=function(){
      return $http({
        url: './_mock/index_list.json',
        method: 'GET'
      });
    };

    // public api
    return {
      getCategory: getCategory,
      getDetail: getDetail,
      getIndexList: getIndexList
    };

  });
