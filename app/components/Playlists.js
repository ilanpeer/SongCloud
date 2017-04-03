import React from 'react';
import Songcard from './Songcard';

export default function Playlists() {

  return (
    <div className="first-div-return-from-playlists">
      {/*<h1 className="playlists">playlists component</h1>*/}
      <div className="playlists-side-nav">
        <button className="add-new-playlist-btn">Add new playlists</button>
        <ul className="playlists-name-list">
          <li>Playlist 1</li>
          <li>Playlist 2</li>
          <li>Playlist 3</li>
          <li>Playlist 4</li>
          <li>Playlist 5</li>
        </ul>
      </div>
      <div className="playlists-body">
        <div className="playlist-header"> $ Playlist name <span>Delete</span></div>


      </div>

    </div>
  );
};
