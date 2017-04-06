import React from 'react';
import Songcard from './Songcard';
import uuid from 'uuid';

export default class Playlist1 extends React.Component {

  constructor() {
    super();
    this.state = {
      playlists: [],
    };

  }

  render() {

    // console.log(this.props.playlist[1].title);

    return (
      <div>
        <div className="playlists-right">
          <div className="playlist-header">
            <p> { this.props.title } </p>
            <input type="text"
            onChange={ (ev) => props.changeName(ev.target.value) }
            value = {Untitled} />
            <span className="delete-list-btn">Delete</span>
          </div>
        </div>
        <div className="playlist-body">
          <div>
            <ul className="playlist-songs">
              {
                this.props.songs.map((song, i) => <li className="cardunit" key={ song.id }>
                    <Songcard
                      song={ song }
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
