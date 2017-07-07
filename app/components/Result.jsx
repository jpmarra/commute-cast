import React from 'react';
import Skycons from 'react-skycons';

const Result = (props) => (
  <div className="result-container">
    <Skycons className="weather-icon" color="black" icon={props.weather.icon} autoPlay={true} />
    <text>{props.weather.temperature}</text>
    <text>{props.weather.summary}</text>
    <text>Your travel time is {props.travelTime}</text>
  </div>
)

export default Result;
