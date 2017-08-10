const app = angular.module('myApp', []);

app.controller('Ctrl_1', ['$scope', function($scope) {
  $scope.value = { string:'Hello world!'};
}]);

app.controller('Ctrl_2', ['$scope', function($scope) {
}]);