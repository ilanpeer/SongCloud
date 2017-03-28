import React from 'react';

export default function Topbar() {

  return (
    <div>
      <nav>
        <div>
          <p>topbar component</p>
          <ul>
            <li><img alt="Logo" src="#"/></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Playlists</a></li>
          </ul>
          <input type="text"/>
          <button name="button">Log out</button>
        </div>
      </nav>
    </div>
  );
  }

