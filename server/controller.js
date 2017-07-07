const axios = require('axios');
require('dotenv').config();


module.exports = {
  getWeather: (req, res) => {
    const destination = req.query.destination;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${process.env.GOOGLE_GEOCODE_KEY}`)
    .then(result => {
      return result.data.results[0].geometry.location
    })
    .then(coordinates => {
      console.log('coords: ', coordinates);
      console.log(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${coordinates.lat},${coordinates.lng}`)
      return axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${coordinates.lat},${coordinates.lng}`)
    })
    .then(result => {
      let weather = {
        icon: result.data.currently.icon.toUpperCase().replace('-','_'),
        summary: result.data.currently.summary,
        temperature: `${parseInt(result.data.currently.temperature)}°F`
      }
      res.send(weather);
    })
  },
  getTravelTime: (req, res) => {
    console.log(process.env.GOOGLE_KEY);
    const origin = req.query.origin;
    const destination = req.query.destination;
    axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?mode=transit&transit_mode=subway&units=imperial&origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_KEY}`)
    .then(result => {
      let info = {
        travelTime: result.data.rows[0].elements[0].duration.text
      }
      return info;
    })
    .then(info => res.send(info))
  }

}
