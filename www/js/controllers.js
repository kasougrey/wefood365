angular.module('wefood.controllers', [])

.controller('ServiceCtrl', function($scope) {

})
.controller('ServiceDishCtrl', function($scope,$ionicHistory) {


})
.controller('ServiceDishConfirmCtrl', function($scope,$ionicLoading) {
  $scope.firstNum = 0;
  $scope.test = function(a) {
    $scope.firstNum ++;
    console.log($scope.firstNum);
  }



})
.controller('EventCtrl', function($scope) {

})

.controller('CartCtrl', function($scope) {

})
.controller('AccountCtrl', function($scope) {

});
