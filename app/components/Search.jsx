import React,{ Component } from 'react';

const Search = (props) => (
  <div className="search-container">
    <img className="logo" src="http://i.imgur.com/mD8AzP4.png" />
    <form className="search-form" onSubmit={props.handleSubmit}>
      <input
        type="text" className="origin input"
        placeholder="Enter your origin..."
        value={props.origin}
        onChange={props.handleOriginChange}
      />
      <input
        type="text" className="destination input"
        placeholder="Enter your destination..."
        value={props.destination}
        onChange={props.handleDestinationChange}
      />
    <button className="submit-btn" type="submit">SUBMIT</button>
  </form>
</div>
);

export default Search;
