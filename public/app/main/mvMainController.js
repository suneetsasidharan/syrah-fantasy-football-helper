
angular.module('app').controller('mvMainController', function($scope){
    $scope.players = [
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
        {name: 'Vardy', position:'ATT'}
    ];
});