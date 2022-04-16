const express = require('express');
const cors = require('cors')()
const bp = require('body-parser')
const fetch = require('cross-fetch')
const formData = require("express-form-data");
const cookieParser = require('cookie-parser')
const session = require('express-session')


//local sorage to store tokens
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./temp-storage');
}

function setupExpress(app) {
    app.use(bp.json())
    app.use(formData.parse())
    app.use(cookieParser())
    app.use(cors)
    app.use(session({ secret: 'my secret' }, { httpOnly: true }, { secure: true }))

  
    app.set('views', __dirname + '/../views');
    app.use(express.static('public'))
        // view engine, set view engine (files, instance)
    app.set('view engine', 'jsx')
    app.engine('jsx', require('express-react-views').createEngine());


}

module.exports = setupExpress