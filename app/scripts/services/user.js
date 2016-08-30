'use strict';

/**
 * @ngdoc service
 * @name slysApp.User
 * @description
 * # User
 * Factory in the slysApp.
 */
angular.module('slysApp')
  .factory('User', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
