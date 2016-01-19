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
.controller('AccountOrderListCtrl',function($scope,$state) {
  $scope.showDetail = function(){
    $state.go('tab.order-detail');
  }
})
.controller('AccountOrderDetailCtrl',function($scope) {
  //我的订单
})
<<<<<<< HEAD
.controller('AccountOrderDetailCtrl',function($scope) {
  //我的订单
})
=======
>>>>>>> origin/master
.controller('AccountTradeListCtrl',function($scope) {
  //我的交易记录
})
.controller('AccountCollectionListCtrl',function($scope) {
  //我的交易记录
})
.controller('AccountAppointmentListCtrl',function($scope) {
  //我的预约定位
});
