'use strict';
angular.module('MainDirective').directive('cmtNavbar', [function(){
  return {
    restict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {},
    link: function($scope, element, attrs){
      // manipulate the DOM here
    }
  };
}]);
