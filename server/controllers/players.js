var players = require('mongoose').model('players');

exports.getDreamteam = function(req, res) {
    players.find( { 'inDreamteam': 'true'} ).exec(function(err, players){
        res.send(players);
    })
};

exports.getTopGoalScorers = function(req, res){
  players.find({}).sort({'goalsScored': -1}).limit(10).exec(function(err, players){
        res.send(players);
    })
};

exports.getTopGoalsConceded = function(req, res){
    players.find({}).sort({'goalsScored': -1}).limit(10).exec(function(err, players){
        res.send(players);
    })
};

exports.getTransfersIn = function(req, res){
    players.find({}).sort({'transfersInEvent': -1}).limit(10).exec(function(err, players){
        res.send(players);
    })
};

exports.getTransfersOut = function(req, res){
    players.find({}).sort({'transfersOutEvent': -1}).limit(10).exec(function(err, players){
        res.send(players);
    })
};

exports.getTopSelectedBy = function(req, res){
    players.find({}).sort({'selectedByPercent': -1}).limit(11).exec(function(err, players){
        res.send(players);
    })
};