const jwt = require('jsonwebtoken');
const config = require('../config/index')
module.exports = {

    createToken(_id) {

        const payload = { _id }
        const options = { expiresIn: '30d' }
        // the token will be use after the login to verify that this is the correct user that is going to make a request to the server
        const token = jwt.sign(payload, config.secret, options)
        return token;
    }

}

//createToken
//verifyToken