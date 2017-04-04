import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Topbar() {

  return (
    <div className="navdiv">
      <nav className="topnav">
        <ul className="navlist">

            <li>
              <NavLink to="/" exact>
                <i className="fa fa-mixcloud nav-logo" aria-hidden="true"/>
                <span> SongCloud</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" activeClassName="selected">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/playlists" exact activeClassName="selected">Playlists</NavLink>
            </li>


            <li>
              <i className="fa fa-search" aria-hidden="true"/>
              <input type="text" placeholder="search"/>
            </li>
            <li>
              <NavLink to="/signin" exact>Logout</NavLink>
            </li>

        </ul>
      </nav>
    </div>
  );
}

