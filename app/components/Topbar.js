import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Topbar() {

  return (
    <div>
      <nav className="topnav">
        <div className="divnav">
          <ul className="menunav">
            <li><NavLink to="/" exact><i className="fa fa-mixcloud nav-logo" aria-hidden="true"/> SongCloud</NavLink>
            </li>
            <li><NavLink to="/explore" exact activeClassName="selected">Explore</NavLink></li>
            <li><NavLink to="/playlists" exact activeClassName="selected">Playlists</NavLink></li>
          </ul>
          {/*<i className="fa fa-search" aria-hidden="true"/>*/}
          <input type="text" placeholder="SEARCH"/>
          <button name="button">Logout</button>
        </div>
      </nav>
    </div>
  );
}

