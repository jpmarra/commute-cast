import React,{ Component } from 'react';
import axios from 'axios';
import Search from '.././components/Search';
import Result from '.././components/Result';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      weather: {},
      travelTime: {},
      origin: '',
      destination: '',
      weather: {},
      time: {},
      resultFound: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
  }

  renderResult(){
    if(this.state.resultFound){
      return <Result weather={this.state.weather} travelTime={this.state.time.travelTime} />
    }
  }

  handleOriginChange(e){
    let origin = e.target.value;
    this.setState({ origin });
  }

  handleDestinationChange(e){
    let destination = e.target.value;
    this.setState({ destination });
  }

  handleSubmit(e){
    e.preventDefault();
    let start = this.state.origin.split(' ').join('+');
    let end = this.state.destination.split(' ').join('+');
    axios.get(`/api/weather?destination=${end}`)
    .then(result => {
      let weather = result.data;
      console.log(weather);
      this.setState({ weather })
    })
    axios.get(`/api/traveltime?origin=${start}&destination=${end}`)
    .then(result => {
      let time = result.data;
      console.log(time);
      this.setState({ time, resultFound: true });
    })

    console.log('origin: ', this.state.origin, 'destination: ', this.state.destination);
  }

  render() {
    return (
      <div className="home-container">
        <Search
          handleSubmit={this.handleSubmit}
          handleOriginChange={this.handleOriginChange}
          handleDestinationChange={this.handleDestinationChange}
          origin={this.state.origin}
          destination={this.state.destination}
          />
        <div className="result-container">{this.renderResult()}</div>
      </div>
    );
  }
}
