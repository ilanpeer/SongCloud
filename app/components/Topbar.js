import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Topbar() {

  return (
    <div>
      <nav>
        <div className="topnav">
          <ul className="menunav">
            <li><NavLink to="/" exact><i className="fa fa-mixcloud nav-logo" aria-hidden="true"/> SongCloud</NavLink>
            </li>
            <li><NavLink to="/explore" exact activeClassName="selected">Explore</NavLink></li>
            <li><NavLink to="/playlists" exact activeClassName="selected">Playlists</NavLink></li>
          </ul>
          <input type="text" placeholder="Search"/>
          <button name="button">Log out</button>
        </div>
      </nav>
    </div>
  );
}

