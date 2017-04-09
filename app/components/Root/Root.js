import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import Topbar from '../Topbar/Topbar';
import Explore from '../Explore/Explore';
import Playlists from '../Playlists/Playlists';
import Player from '../Player/Player';


export default class Root extends React.Component {

  constructor() {
    super();


    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addNewPlaylist = this.addNewPlaylist.bind(this);

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


  updateCurrentTrack(newSong) {
    this.setState({
      currentTrack: Object.assign({}, newSong)
    })
  }

  updatePlaylistName(newName, playlistId) {
    // copy of playlists
    const copiedPlaylists = [...this.state.playlists];

    // copy the target playlist and update it's name

    // playlists: Object.assign({}, newName),
    this.setState({ })
  }

  addNewPlaylist(song) {
   console.log('Create playlist+');

    if (song) {
      // render for explore
    }
    else {
      // copy of playlists
      const copiedPlaylists = [...this.state.playlists];

      // create uuid

      // new playlist object

      // this.props.history.push('/playlists');
      event.preventDefault();
      this.setState({ })
    }
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
            return <Explore updateCurrentTrack={ this.updateCurrentTrack }
                            addNewPlaylist={ this.addNewPlaylist }
                            currentTrack={ this.state.currentTrack }
                            playlists={ this.state.playlists }
                            {...props}/>
          }}/>
          <Route exact path="/explore" component={() =>
            <Redirect to="/explore/trance"/>
          }/>

          <Route exact path="/playlists" render={ (props) => {
            return <Playlists updateCurrentTrack={ this.updateCurrentTrack }
                              updatePlaylistName={ this.updatePlaylistName }
                              addNewPlaylist={ this.addNewPlaylist }
                              currentTrack={ this.state.currentTrack }
                              playlists={ this.state.playlists }
                              {...props}/>
          }}/>
        </Switch>

        <Player track={ this.state.currentTrack }/>
      </div>
    )
  }

}

