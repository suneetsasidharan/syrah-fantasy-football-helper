angular.module('app').controller('mvMainController', function($scope, $http){

    $http.get('/allPlayers').success(function(response){
        $scope.allPlayers = response;
    }).then(function (data){
        $scope.dreamTeam = $scope.allPlayers.filter(function (player){
            return (player.inDreamteam === true)
        });

        var sortScorers= $scope.allPlayers.sort(function (a,b){
            return parseFloat(b.goalsScored - a.goalsScored)
        });
        $scope.topScorers = sortScorers.slice(0, 10);

        var sortSelectedBy= $scope.allPlayers.sort(function (a,b){
            return parseFloat(b.selectedByPercent - a.selectedByPercent)
        });
        $scope.topSelectedBy = sortSelectedBy.slice(0, 10);

        var sortTransfersIn= $scope.allPlayers.sort(function (a,b){
            return parseFloat(b.transfersInEvent - a.transfersInEvent)
        });
        $scope.transfersIn = sortTransfersIn.slice(0, 10);

        var sortTransfersOut= $scope.allPlayers.sort(function (a,b){
            return parseFloat(b.transfersOutEvent - a.transfersOutEvent)
        });
        $scope.transfersOut = sortTransfersOut.slice(0, 10);

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