angular.module("myApp").service("dataService", function() {

    var UserArray = [];
    this.getUser = function() {
        var addyArray = JSON.parse(localStorage.getItem("userLS")) || [];
        userArray = addyArray;
            console.log(addyArray);
        return userArray;
    };

    this.saveUser = function(pName, pAddress, pCity, pState, pZip) {
        var savedUsers = {name: pName, address: pAddress, city: pCity, state: pState, zip: pZip};
        userArray.push(savedUsers);
        localStorage.setItem("userLS", JSON.stringify(userArray));
    };

    this.removeUserAt = function(pIndex) {
        userArray.splice(pIndex,1);
        localStorage.setItem("userLS", JSON.stringify(userArray));
    };

    this.destroyLocalStorage = function () {
        userArray.splice(0);
        localStorage.clear();
    }

});
