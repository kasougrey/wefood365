// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('wefood', ['ionic', 'wefood.controllers', 'wefood.services','wefood.directive'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.service', {
    url: '/service',
    views: {
      'tab-service': {
        templateUrl: 'templates/service/index.html',
        controller: 'ServiceCtrl'
      }
    }
  })
    .state('tab.dish', {
      url: '/service/dish',
      views: {
        'tab-service': {
          templateUrl: 'templates/service/dish.html',
          controller: 'ServiceDishCtrl'
        }
      }
    })
    .state('tab.dish-confirm', {
      url: '/service/dish-confirm',
      views: {
        'tab-service': {
          templateUrl: 'templates/service/dish-confirm.html',
          controller: 'ServiceDishConfirmCtrl'
        }
      }
    })

  .state('tab.event', {
      url: '/event',
      views: {
        'tab-event': {
          templateUrl: 'templates/event/index.html',
          controller: 'EventCtrl'
        }
      }
    })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/cart/index.html',
        controller: 'CartCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/account/index.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.order-list',{
    url:'/account/order-list',
    views:{
      'tab-account':{
        templateUrl: 'templates/account/order-list.html',
        controller: 'AccountOrderListCtrl'
      }
    }
  })
  .state('dish', {
    url: '/dish',
    abstract: true,
    templateUrl: 'templates/dish.html'
  })
  .state('dish.test',{
    url:'/test',
    views:{
      'dish-content':{
        templateUrl: 'templates/test.html',
        controller: 'TestCtrl'
      }
    }
  })
    .state('test2',{
      url:'/test2',
      templateUrl: 'templates/test.html'
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/service');

});
