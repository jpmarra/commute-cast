import React,{ Component } from 'react';

const Search = (props) => (
  <div className="search-container">
    <text>242 Troutman St Brooklyn, NY 369 Lexington Ave New York, NY</text>
    <form className="search-form" onSubmit={props.handleSubmit}>
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
