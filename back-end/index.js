const config = require('./config')
const express = require('express');
const app = express();
require('./config/express')(app)
require('./config/mongoose')(app)
const routes = require('./routes')
app.use(routes)


app.listen(config.development.port, () => console.log("Running server"));