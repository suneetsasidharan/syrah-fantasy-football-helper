var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    playerId: Number,
    cleanSheets: Number,
    eventPoints: Number,
    form: Number,
    goalsConceded: Number,
    goalsScored: Number,
    inDreamteam: Boolean,
    nowCost: Number,
    pointsPerGame: Number,
    redCards: Number,
    selectedByPercent: Number,
    status: String,
    teamName: String,
    totalPoints: Number,
    transfersIn: Number,
    transfersInEvent: Number,
    transfersOut: Number,
    transfersOutEvent: Number,
    typeName: String,
    webName: String,
    yellowCards: Number
});

var players =  mongoose.model('players', playerSchema);

playerSchema.methods.showPlayer = function(){
    var name = this.playerName;
    var pos = this.position;
    console.log('I '+name+ ' play at ' +pos);
};

module.exports = players;