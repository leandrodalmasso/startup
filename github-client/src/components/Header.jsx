import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>GitHub Client</h1>
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/top">Top 10</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;