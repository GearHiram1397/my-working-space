// connection object
const config = {
    // object listening to the port 
    development: { port: process.env.port || 8088 },
    production: {},
    //the connection string for the data base
    DB_CONNECTION: 'mongodb://localhost:27017/myworkingspace',
    // encryption for password rounds
    saltRounds: 11,
    secret: "Qq6feotXsomp&zPa222",
    cookie: "x_auth_token"
}

module.exports = config