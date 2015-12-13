var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/fantasyhelper',
        port: process.env.PORT || 3030,
        message: 'Hello from Mongo - Dev Instance'
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://amber:C1earstone@ds052408.mongolab.com:52408/syrah',
        port: process.env.PORT || 80,
        message: 'Hello from MongoLab - Prod Instance'
    }
}