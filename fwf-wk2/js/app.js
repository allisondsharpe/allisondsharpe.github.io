angular.module('myApp', []).controller('newController', function($scope,dataService) {
    $scope.users = dataService.getUser();
        $scope.newUser = {};

        // adds new user
        $scope.addNewUser = function() {
            dataService.saveUser($scope.newUser.name, $scope.newUser.address, $scope.newUser.city, $scope.newUser.state, $scope.newUser.zip);
            $scope.newUser = {};
        };

        // remove user
        $scope.removeAddy = function(idx) {
            dataService.removeUserAt(idx);
        };

        // clears storage
        $scope.clearIt = function() {
            dataService.destroyLocalStorage();
        };

});