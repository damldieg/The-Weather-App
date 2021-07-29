import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({titulo ,onSearch}) {
  return (
    <div className="nav">
      <h1 className="title">{titulo}</h1>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
