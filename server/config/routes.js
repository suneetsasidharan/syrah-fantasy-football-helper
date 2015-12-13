var players = require('../controllers/players'),
    mongoose = require('mongoose'),
    Player = mongoose.model('players');

module.exports = function (app){

    app.get('/allPlayers', players.getAllPlayers);

    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' +req.params[0]);
    });

    app.get('*', function(req, res){
        res.render('index');
    });

}