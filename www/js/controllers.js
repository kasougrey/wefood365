angular.module('wefood.controllers', [])

.controller('ServiceCtrl', function($scope) {

})
.controller('ServiceDishCtrl', function($scope,$ionicHistory) {
console.log($ionicHistory.backView());
console.log($ionicHistory.forwardView());

})
.controller('ServiceDishConfirmCtrl', function($scope) {

})
.controller('EventCtrl', function($scope) {

})

.controller('CartCtrl', function($scope) {

})
.controller('AccountCtrl', function($scope) {

});
