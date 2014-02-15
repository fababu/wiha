'use strict';

angular.module('wihaApp')
  .factory('Wish', function ($resource) {
    return $resource('/api/users/:userId/wish/:id', {
      userId: 'me',
      id: '@id'
    });
  });
