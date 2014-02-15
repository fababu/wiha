'use strict';

angular.module('wihaApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'needLogin': false
    }, {
      'title': 'Wishes',
      'link': '/wishes',
      'needLogin': true
    }, {
      'title': 'Settings',
      'link': '/settings',
      'needLogin': true
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
