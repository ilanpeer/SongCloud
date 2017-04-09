import './Playlist1.scss'
import React from 'react';
import Songcard from '../Songcard/Songcard';
import uuid from 'uuid';

export default class Playlist1 extends React.Component {

  constructor() {
    super();
    this.state = {
      playlists: [],
      mode: 'playlist',
      title: 'Untitled',
      focusedPlaylist: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({value: event.target.title});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
  }


  render() {
    // console.log(this.props.currentTrack);

    return (
      <div className="first-return-from-playlist1">
        <div className="playlists-right">
          <div className="playlist-header">
            <form onSubmit={ this.handleSubmit }>
            <p> { this.props.title } </p>
            <input type="text"
                   onChange={ (ev) => props.updatePlaylistName(ev.target.title) }
                   value={ this.state.title }/>
            <button className="delete-list-btn">Delete</button>
            </form>
          </div>
        </div>
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
