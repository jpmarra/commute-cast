import React from 'react';
import Skycons from 'react-skycons';

const Result = (props) => (
  <div className="result-info">
    <section className="details col-xs-3">
      <header className="header">Your travel time is</header>
      <text className="travel-time">{props.travelTime}</text>
    </section>
    <section className="details col-xs-3">
      <header className="header">Current weather</header>
      <Skycons className="weather-icon" color="#0065BD" icon={props.weather.icon} autoPlay={true} />
      <text className="weather-body">{props.weather.summary}</text>
      <text className="weather-body">{props.weather.temperature}</text>
    </section>
  </div>
)

export default Result;
