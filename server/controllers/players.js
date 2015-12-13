var players = require('mongoose').model('players');

exports.getAllPlayers = function(req, res) {
    players.find().exec(function(err, players){
        res.send(players);
    })
};