import React from 'react';
import Songcard from './Songcard';

export default function Playlists() {

  return (
    <div className="first-div-return-from-playlists">
      <div className="playlists-side-nav">
        <div className="add-new-playlist">
        <button className="add-new-playlist-btn">Add new playlists</button>
        </div>
        <ul className="playlists-name-list">
          <li>Playlist 1</li>
          <li>Playlist 2</li>
          <li>Playlist 3</li>
          <li>Playlist 4</li>
          <li>Playlist 5</li>
        </ul>
      </div>
      <div className="playlists-body">
        <div className="playlist-header"> $ Playlist name <span className="delete-list-btn">Delete</span></div>


      </div>

    </div>
  );
};
