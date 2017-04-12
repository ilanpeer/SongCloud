import './Playlists.scss'
import React from 'react';
import Songcard from '../Songcard/Songcard';
import Playlist1 from '../Playlist1/Playlist1';
import uuid from 'uuid';

export default function Playlists(props) {
  // console.log(props.playlists[1].title);

  return (
    <div className="first-div-return-from-playlists">
      <div className="playlists-left-side">
        <div className="add-new-playlist">
          <button type="submit" onClick={ () => props.addNewPlaylist()} className="add-new-playlist-btn">Add new playlist</button>
        </div>
        <ul className="playlists-name-list">
          {props.playlists.map((playlist) => <li className="list-name" key={playlist.id}>{playlist.title}</li>)
          }
        </ul>
      </div>
      <div className="playlists-right-side">
        {
          props.playlists.map((playlist, i) => <div className="playlist-unit" key={ playlist.id }>
              <Playlist1
                title={ playlist.title }
                id={ playlist.id }
                songs={ playlist.songs }
                updatePlaylistName={ props.updatePlaylistName }
                deletePlaylist={ props.deletePlaylist }
                {...props}
              />
            </div>
          )}
      </div>

    </div>
  );

}
