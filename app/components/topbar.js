import React from 'react';

export default function Topbar() {

  return (
    <div>
      <nav>
        <div className="topnav">
          <ul className="menunav">
            <li><i className="fa fa-mixcloud nav-logo" aria-hidden="true"/> SongCloud</li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Playlists</a></li>
          </ul>
          <input type="text" placeholder="Search"/>
          <button name="button">Log out</button>
        </div>
      </nav>
    </div>
  );
}

