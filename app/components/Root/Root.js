import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import uuid from 'uuid';
import Topbar from '../Topbar/Topbar';
import Explore from '../Explore/Explore';
import Playlists from '../Playlists/Playlists';
import Player from '../Player/Player';


export default class Root extends React.Component {

  constructor() {
    super();

    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addNewPlaylist = this.addNewPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);

    this.state = {
      currentTrack: {},
      playlists: [
        {
          id: 111,
          title: 'Dynamic playlist name',
          songs: [
            {
              "id": 25071174,
              "title": "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
              "duration": 1000,

              "stream_url": "https://api.soundcloud.com/tracks/250711755/stream",
              "uri": "https://api.soundcloud.com/tracks/250711755",
              "artwork_url": "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
            }]
        },
        {
          id: 222,
          title: 'my 2nd playlist',
          songs: [
            {
              "id": 250711755,
              "title": "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
              "duration": 219082,
              "stream_url": "https://api.soundcloud.com/tracks/250711755/stream",
              "uri": "https://api.soundcloud.com/tracks/250711755",
              "artwork_url": "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
            }]
        }
      ]
    }
  }

  updatePlaylistName(newName, playlistId) {
    // copy of playlists
    const copiedPlaylists = [...this.state.playlists];

    // copy the target playlist and update it's name
    const newPlaylists = [newName, playlistId, {}];

    // playlists: Object.assign({}, newName),
    this.setState({})
  }

  addNewPlaylist(newName, redirectTo) {
    const copiedPlaylists = [...this.state.playlists];
    const newPlaylist = {id: uuid(), title: 'Untitled', songs: []};
    // new playlist object
    copiedPlaylists.splice((this.state.playlists.length - 1 + 1), 0, newPlaylist);

    if (!redirectTo) {
      this.setState({
        playlists: copiedPlaylists,
      })
    }
    if (redirectTo) {
      this.setState({
        playlists: copiedPlaylists,
      }, () => {
        this.props.history.push(redirectTo);
      })
    }
  }

  deletePlaylist(event) {
    alert('Delete ' + this.state.title + '?');
    event.preventDefault();
  }

  render() {
    return (
      <div className="div-return-from-root-js">
        <Topbar/>

        <Switch>
          <Route exact path="/" component={() =>
            <Redirect to="/explore"/>
          }/>
          <Route exact path="/explore/:genre" render={ (props) => {
            return <Explore addNewPlaylist={ this.addNewPlaylist }
                            playlists={ this.state.playlists }
                            {...props}/>
          }}/>
          <Route exact path="/explore" component={() =>
            <Redirect to="/explore/trance"/>
          }/>

          <Route exact path="/playlists" render={ (props) => {
            return <Playlists updatePlaylistName={ this.updatePlaylistName }
                              addNewPlaylist={ this.addNewPlaylist }
                              deletePlaylist={ this.deletePlaylist }
                              playlists={ this.state.playlists }
                              {...props}/>
          }}/>
        </Switch>

        <Player />
      </div>
    )
  }

}
