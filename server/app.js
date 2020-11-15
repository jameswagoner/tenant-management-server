const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

module.exports = () => {
  const route = require('./route');
  const server = express();

  const create = () => {
    // Env settings
    dotenv.config();
    server.set('env', process.env.APP_ENV);
    server.set('appUrl', process.env.APP_URL);

    // Connect to MongoDB
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).catch((err) => console.log(err));

    // Use a logger
    server.use(logger('dev'));

    // Use body-parser
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // Use CORS
    server.use(cors({
      allowedHeaders: ['Origin', 'X-Requested-With', 'Accepts', 'Content-Type', 'Authorization']
    }));

    route.init(server);
  }

  const start = () => {
    server.listen(process.env.SERVER_PORT);
  }

  return {
    create: create,
    start: start
  }
}
