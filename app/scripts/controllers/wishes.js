'use strict';

angular.module('wihaApp')
  .controller('WishesCtrl', function ($scope, Wish) {
    $scope.wishes = Wish.query();
    $scope.makeAWish = function makeAWish() {
      var wish = new Wish({text: $scope.newWish});
      wish.$save(function success(value) {
        $scope.newWish = '';
        $scope.wishes = Wish.query();
      });
    };
  });
