angular.module('app').controller('mvMainController', function($scope){
    $scope.dreamTeam = [
        {name: 'Elliot', position:'GK'},
        {name: 'Dann', position:'DEF'},
        {name: 'Yoshida', position:'DEF'},
        {name: 'Wollscheid', position:'DEF'},
        {name: 'Wisdom', position:'DEF'},
        {name: 'Lingard', position:'MID'},
        {name: 'Howson', position:'MID'},
        {name: 'Lanzini', position:'MID'},
        {name: 'Coutinho', position:'MID'},
        {name: 'Kante', position:'MID'},
        {name: 'Vardy', position:'FWD'}
    ];

    $scope.transfersIn = [
        {name: 'Ozil', position: 'MID'},
        {name: 'Lukaku', position: 'FWD'},
        {name: 'Coutinho', position: 'MID'},
        {name: 'Kane', position: 'FWD'},
        {name: 'Smalling', position: 'DEF'}
    ];

    $scope.transfersOut = [
        {name: 'Payet', position: 'MID'},
        {name: 'Bellerin', position: 'DEF'},
        {name: 'Pelle', position: 'FWD'},
        {name: 'Bony', position: 'FWD'},
        {name: 'Martial', position: 'FWD'}
    ];

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