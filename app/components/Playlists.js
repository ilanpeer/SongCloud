import React from 'react';
import Songcard from './Songcard';
import uuid from 'uuid';

export default class Playlists extends React.Component {


render() {

  // console.log(this.props.data[1].title);

  return (
    <div className="first-div-return-from-playlists">
      <div className="playlists-side-nav">
        <div className="add-new-playlist">
          <button className="add-new-playlist-btn">Add new playlists</button>
        </div>
        <ul className="playlists-name-list">
          {
            this.props.data.map((playlist, i) => {
              return <li className="list-name" key={ uuid() }>
                {playlist.title}
                </li>
            })
          }
        </ul>
      </div>
      <div className="playlists-right">
        <div className="playlist-header">
          <p>$ Playlist name </p>
          {/*<input type="text"*/}
                 {/*onChange={ (ev) => props.changeName(ev.target.value) }*/}
                 {/*value = {?} />*/}
          <span className="delete-list-btn">Delete</span></div>
      </div>
      <div className="playlist-body">
        <div>
          <ul className="playlist-songs">
            {
              this.state.data.map((song, i) => <li className="cardunit" key={ song.id }>
                  <Songcard
                    song={ song }
                    // currentTrack={ this.props.track }
                  />
                </li>
              )}
          </ul>
        </div>

      </div>

    </div>
  );

}
}
