var mongoose = require('mongoose');
var http = require('http');
var Player = require('../../server/models/players');
module.exports = function(config) {
    mongoose.connect(config.db);


    var messageSchema = mongoose.Schema({message: String});
    var Message = mongoose.model('Message', messageSchema);
    var mongoMessage;
    Message.findOne().exec(function (err, messageDoc) {
        mongoMessage = messageDoc.message;
    });

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error....'));
    db.once('open', function callback() {
        console.log(config.message);
    });


    //Uncomment for DB update
  /*  var i = 1;

    while(i < 633) {
        http.get('http://fantasy.premierleague.com/web/api/elements/' + i + '/?_=98', function (result) {
            var data = '';
            result.on('data', function (chunk) {
                data += chunk;
            });

            result.on('end', function () {
                var player = JSON.parse(data);
                var p1 = new Player({
                    playerId: player.id,
                    cleanSheets: player.clean_sheets,
                    eventPoints: player.event_points,
                    form: player.form,
                    goalsConceded: player.goals_conceded,
                    goalsScored: player.goals_scored,
                    inDreamteam: player.in_dreamteam,
                    nowCost: player.now_cost/10,
                    pointsPerGame: player.points_per_game,
                    redCards: player.red_cards,
                    selectedByPercent: player.selected_by_percent,
                    status: player.status,
                    teamName: player.team_name,
                    totalPoints: player.total_points,
                    transfersIn: player.transfers_in,
                    transfersInEvent: player.transfers_in_event,
                    transfersOut: player.transfers_out,
                    transfersOutEvent: player.transfers_out_event,
                    typeName: player.type_name,
                    webName: player.web_name,
                    yellowCards: player.yellow_cards
                });

                p1.save(function (err, p1) {
                    if (err) throw err;
                    console.log(p1.webName + ' from '+p1.teamName+' saved successfully to '+ p1.playerId+' at cost '+p1.nowCost+' !');
                });
                //console.log(db.listCollections());
            });
        });
        i++;
    }*/
    /*Player.find(function (err, players) {
        if (err) return console.error(err);
        console.log(players);
    })*/
}