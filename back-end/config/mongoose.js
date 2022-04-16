const mongoose = require('mongoose');
const config = require('./index')

module.exports = (app) => {
    mongoose.connect(config.DB_CONNECTION).then(() => {
        console.log('Database Connected');
    })

}