app.controller('chatController', ['$scope', ($scope) =>{
    const socket = io.connect('http://localhost:3000');
    console.log('chatController Works...');
}]);