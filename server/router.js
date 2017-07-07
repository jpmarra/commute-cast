const Controller = require('./controller');
const express = require('express');

const app = express.Router();

app.get('/weather', Controller.getWeather);
app.get('/traveltime', Controller.getTravelTime);

module.exports = app;
