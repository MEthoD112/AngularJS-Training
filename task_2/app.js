const app = angular.module('myApp', []);

app.controller('Controller', ['$scope', function($scope) {
  $scope.value = 'Hello world!';
}])
.directive('myModal', function() {
  return {
    restrict: 'E',
    scope: { title : '=title'},
    templateUrl: 'template.html'
  };
});