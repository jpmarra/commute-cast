import React from 'react';
import Skycons from 'react-skycons';

const Result = (props) => (
  <div className="result-info">
    <Skycons className="weather-icon" color="#0065BD" icon={props.weather.icon} autoPlay={true} />
    <text>{props.weather.temperature}</text>
    <text>{props.weather.summary}</text>
    <text>Your travel time is {props.travelTime}</text>
  </div>
)

export default Result;
