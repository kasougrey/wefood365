angular.module('wefood.controllers', [])

.controller('ServiceCtrl', function($scope) {

})
.controller('TestCtrl', function($scope) {
  console.log($scope);
})
.controller('ServiceDishCtrl', function($scope,$ionicHistory) {


})
.controller('ServiceDishConfirmCtrl', function($scope) {

})
.controller('EventCtrl', function($scope) {

})

.controller('CartCtrl', function($scope) {

})
.controller('AccountCtrl', function($scope,$state) {
  $scope.goUrl = function(url) {
    $state.go(url);
  }
})
.controller('AccountOrderListCtrl',function($scope) {
  //我的订单
});
