import './Playlists.scss';
import React from 'react';
import store from '../../store';
import Playlist1 from '../Playlist1/Playlist1';
import uuid from 'uuid';
import {connect} from "react-redux";


function Playlists(props) {
  // console.log(props.playlists[1].title);
  // console.log(store.getState().playlists);

  function newPlaylistBtn() {
    store.dispatch({
      type: 'NEW_PLAYLIST_BTN',
      title: 'Untitled',
      id: uuid(),
      song: {},
    })
  }

  return (
    <div className="first-div-return-from-playlists">
      <div className="playlists-left-side">
        <div className="add-new-playlist">
          <button type="submit" onClick={ () => newPlaylistBtn() } className="add-new-playlist-btn">Add new playlist</button>
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
                match={props.match}
                title={ playlist.title }
                id={ playlist.id }
                songs={ playlist.songs }
                updatePlaylistName={ props.updatePlaylistName }
                deletePlaylist={ props.deletePlaylist }
                addNewPlaylist={props.addNewPlaylist}
                {...props}
              />
            </div>
          )}
      </div>

    </div>
  );

}

function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps)(Playlists);
