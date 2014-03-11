'use strict';

angular.module('wihaApp')
  .controller('WishesCtrl', function ($scope, Wish) {
    $scope.wishes = Wish.query();
    $scope.makeAWish = function makeAWish() {
      var wish = new Wish({text: $scope.newWish});
      wish.$save(function success() {
        $scope.newWish = '';
        $scope.wishes = Wish.query();
      });
    };
    $scope.deleteAWish = function deleteAWish(wishId) {
      var wish = new Wish({id: wishId});
      wish.$delete(function success() {
        $scope.wishes = Wish.query();
      });
    };
  });
