import React from 'react';
import Songcard from './Songcard';
import uuid from 'uuid';

export default class Playlist1 extends React.Component {

  constructor() {
    super();
    this.state = {
      playlists: [],
      mode: 'playlist',
    };
  }



  render() {

    // console.log(this.props.currentTrack);

    return (
      <div>
        <div className="playlists-right">
          <div className="playlist-header">
            <p> { this.props.title } </p>
            <input type="text"
                   onChange={ (ev) => props.changeName(ev.target.value) }
                   defaultValue={'Untitled'}/>
            <span className="delete-list-btn">Delete</span>
          </div>
        </div>
        {/*{ console.log(this.state.mode) }*/}
        <div className="playlist-body">
          <div>
            <ul className="playlist-songs">
              {
                this.props.songs.map((song, i) => <li className="cardunit" key={ song.id }>
                    <Songcard
                      song={ song }
                      playlists={ this.props.playlists }
                      currentTrack={ this.props.currentTrack }
                      updateCurrentTrack={ this.props.updateCurrentTrack }
                      mode={ this.state.mode }
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
