(function() {
  app.controller('CharacterController', ['$scope', '$http',
  function($scope, $http) {

    $scope.characters = {};
    $scope.character = {};

    $scope.getCharacters = function() {
      $scope.characters = {};

      $http.get('/api/characters')
      .then(function successCallback(response) {
        $scope.characters = response;
      }, function errorCallback(response) {
      });
    };

    $scope.saveCharacter = function(character) {
      $http.post('/api/characters', character)
      .then(function successCallback(response) {
        alert($scope.character.characterName + ' has been saved!');
        $scope.character = {};
      }, function errorCallback(response) {
      });
    };
  }]);

  app.controller('LogController', ['$scope', '$http',
  function($scope, $http) {

    $scope.logs = {};
    $scope.log = {};

    $scope.getLogs = function() {
      $scope.logs = {};

      $http.get('/api/logs')
      .then(function successCallback(response) {
        $scope.logs = response;
      }, function errorCallback(response) {
      });
    };

    $scope.saveLog = function(log) {
      $http.post('/api/logs', log)
      .then(function successCallback(response) {
        alert('Log for ' + $scope.log.playDate + ' has been saved!');
        $scope.log = {};
      }, function errorCallback(response) {
      });
    };
  }]);

  app.controller('HomeController', ['$scope', '$http',
  function($scope, $http) {

    $scope.users = {};
    $scope.user = {};

    $scope.getUsers = function() {
      $scope.users = {};

      $http.get('/users')
      .then(function successCallback(response) {
        $scope.users = response;
      }, function errorCallback(response) {
      });
    };

    $scope.saveUser = function(user) {
      $http.post('/users', users)
      .then(function successCallback(response) {
        alert('User: ' + $scope.user.userName + ' has been saved!');
        $scope.user = {};
      }, function errorCallback(response) {
      });
    };
  }]);
})();
