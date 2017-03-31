import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Topbar() {

  return (
    <div>
      <nav className="topnav">
          <ul className="menunav">
            <li><NavLink to="/" exact><i className="fa fa-mixcloud nav-logo" aria-hidden="true"/> <span>SongCloud</span></NavLink>
            </li>
            <li><NavLink to="/explore" exact activeClassName="selected">Explore</NavLink></li>
            <li><NavLink to="/playlists" exact activeClassName="selected">Playlists</NavLink></li>
            <li><input type="text" placeholder="search"/></li>
            <li><button name="button">Logout</button></li>
          </ul>
          {/*<i className="fa fa-search" aria-hidden="true"/>*/}
      </nav>
    </div>
  );
}

