const mongodb = require('mongodb');
const config = require('./index')

module.exports = (app) => {
    const MongoClient = mongodb.MongoClient;
    const connectionStr = config.DB_CONNECTION
    const client = new MongoClient(connectionStr)
    client.connect(function(err) {

        if (err) { throw new Error(err) }
    })


}