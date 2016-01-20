angular.module('wefood.controllers', [])

.controller('ServiceCtrl', function($scope) {

})
.controller('TestCtrl', function($scope) {
  console.log($scope);
})

//service
.controller('ServiceDishCtrl', function($scope,$ionicHistory) {
})
.controller('ServiceDishConfirmCtrl', function($scope) {
})
.controller('ServiceAppointmentCtrl', function($scope) {

})


//event
.controller('EventCtrl', function($scope) {
})

//cart
.controller('CartCtrl', function($scope) {
})

//account
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
.controller('AccountTradeListCtrl',function($scope) {
  //我的交易记录
})
.controller('AccountCollectionListCtrl',function($scope) {
  //我的交易记录
})
.controller('AccountAppointmentListCtrl',function($scope,$state) {
  $scope.showDetail = function(){
    $state.go('appointment-detail');
  }
})
.controller('AccountAppointmentDetailCtrl',function($scope){

});
