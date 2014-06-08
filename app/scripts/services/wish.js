'use strict';

angular.module('wihaApp')
  .factory('Wish', function ($resource) {
    return $resource('/api/users/:userId/wish/:id', {
      userId: 'me',
      id: '@id'
    }, { //parameters default
      get: {
        method: 'GET'
      },
      remove: {
        method: 'DELETE',
        parameters: {
          id: '@id'
        }
      }
    });
  });
