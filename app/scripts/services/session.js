'use strict';

angular.module('wihaApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
