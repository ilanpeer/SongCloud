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


    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
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


  updateCurrentTrack(newSong) {
    this.setState({
      currentTrack: Object.assign({}, newSong)
    })
  }

  updatePlaylistName(newName, playlistId) {
    // copy of playlists
    const copiedPlaylists = [...this.state.playlists];

    // copy the target playlist and update it's name
    const newPlaylists = [newName, playlistId, {}];

    // playlists: Object.assign({}, newName),
    this.setState({})
  }

  createNewPlaylist(newSong, redirectTo) {
    const newPlaylists = [...this.state.playlists];
    const playlistSongs = newSong ? [newSong] : [];
    newPlaylists.push({
      id: uuid(),
      title: 'Untitled',
      isFocusMode: true,
      songs: playlistSongs
    });
    if (!redirectTo) {
      this.setState({
        playlists: newPlaylists
      })
    }
    if (redirectTo) {
      this.setState({
        playlists: newPlaylists
      }, () => {
        this.props.history.push(redirectTo);
      })
    }
  }

  addNewPlaylist(newSong, redirectTo) {
    const copiedPlaylists = [...this.state.playlists];
    const newPlaylist = {id: uuid(), title: 'Untitled', songs: []};
    copiedPlaylists.splice((this.state.playlists.length - 1 + 1), 0, newPlaylist);
    // new playlist object

    // this.props.history.push('/playlists');
    // event.preventDefault();
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
                              deletePlaylist={ this.deletePlaylist }
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






function mapDispatchToProps(dispatch) {
  return {
    updateSongInPlayer(song) {
      dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        currentTrack: song
      });
    },
    CreateAddListElmHandler(song) {
      dispatch({type: 'ADDED-NEW-LIST', addedNewList: true});
      dispatch({type: 'ADD-NEW-PLAYLIST', song: song, element: this.Elm})
    }
  }
}
