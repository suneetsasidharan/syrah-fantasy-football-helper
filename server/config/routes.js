var players = require('../controllers/players'),
    mongoose = require('mongoose'),
    Player = mongoose.model('players');

module.exports = function (app){

    app.get('/allplayers', function (req, res){
        mongoose.model('players').find(function(err, players){
            res.send(players);
        });
    });

    app.get('/dreamteam', players.getDreamteam);
    app.get('/topscorers', players.getTopGoalScorers);
    app.get('/transfersin', players.getTransfersIn);
    app.get('/transfersout', players.getTransfersOut);
    app.get('/topselectedby', players.getTopSelectedBy);

    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' +req.params[0]);
    });

    app.get('*', function(req, res){
        res.render('index');
    });

}