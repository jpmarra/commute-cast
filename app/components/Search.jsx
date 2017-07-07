import React,{ Component } from 'react';

const Search = (props) => (
  <div className="search-page-container">
    <form onSubmit={props.handleSubmit}>
      <input
        type="text" className="origin"
        placeholder="Search"
        value={props.origin}
        onChange={props.handleOriginChange}
      />
      <input
        type="text" className="destination"
        placeholder="Search"
        value={props.destination}
        onChange={props.handleDestinationChange}
      />
    <button className="submit-btn" type="submit">SUBMIT!</button>
  </form>
</div>
);

export default Search;
