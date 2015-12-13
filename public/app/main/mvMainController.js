angular.module('app').controller('mvMainController', function($scope, $http){

    $http.get('/dreamteam').success(function(response){
        $scope.dreamTeam = response;
    });

    $http.get('/topscorers').success(function(response){
        console.log(response);
        $scope.topScorers = response;
    });

    $http.get('/transfersin').success(function(response){
        console.log(response);
        $scope.transfersIn = response;
    });

    $http.get('/transfersout').success(function(response){
        console.log(response);
        $scope.transfersOut = response;
    });

    $http.get('/topselectedby').success(function(response){
        console.log(response);
        $scope.topSelectedBy = response;
    });

    $scope.injuries = [
        {name: 'Bigirimana', position:'MID'},
        {name: 'Delph', position:'MID'},
        {name: 'Hazard', position:'MID'},
        {name: 'Ayew', position:'MID'},
        {name: 'Dembele', position:'MID'},
        {name: 'van Dijk', position:'DEF'},
        {name: 'Smalling', position:'DEF'},
        {name: 'Gested', position:'FWD'},
        {name: 'Carrick', position:'MID'},
        {name: 'Amavi', position:'DEF'},
        {name: 'Vardy', position:'FWD'}
    ];
});