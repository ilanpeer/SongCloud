import React from 'react';
import Songcard from './Songcard';
import Playlist1 from './Playlist1';
import uuid from 'uuid';

export default function Playlists(props) {
  // console.log(props.playlists);

  return (
    <div className="first-div-return-from-playlists">
      <div className="playlists-left-side">
        <div className="add-new-playlist">
          <button className="add-new-playlist-btn">Add new playlists</button>
        </div>
        <ul className="playlists-name-list">
          {props.playlists.map((playlist) => <li className="list-name" key={ playlist.id }>
            {playlist.title}</li>)
          }
        </ul>
      </div>
      <div className="playlists-right-side">
        {
          props.playlists.map((playlist, i) => <div className="playlists-main" key={ playlist.id }>
              <Playlist1
                title={ playlist.title }
                songs={ playlist.songs }
              />
            </div>
          )}
      </div>

    </div>
  );

}
