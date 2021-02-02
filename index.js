const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/index');
const env = require('dotenv')
const bodyParser = require('body-parser');
const joiErrors = require('./src/middleware/joiErrors');
const io = require('socket.io-client');
const receiveMessage = require('./src/helpers/socket-fns/home')


env.config()
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 7000;

const appValue = express()

const socket = io(process.env.SOCKET_PAR_URL)

receiveMessage(socket)

appValue.options("*", cors());
appValue.use(express.urlencoded({ extended: true }));

appValue.use(bodyParser.json({limit: '50mb'}));
appValue.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

appValue.use(routes);

appValue.use(joiErrors.joiErrors());


appValue.listen(port, () => {
    console.log(`Server running on port:${port}`);
  });
  
module.exports= appValue;
