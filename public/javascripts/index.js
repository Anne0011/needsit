(function(){
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name="Zoe";
    $scope.instructors = [
      {name:'steve', allergies:'sunshine'},
      {name:'joe', allergies:'everything'},
      {name:'zoe', allergies:'students'}
    ];

  }]);
})();