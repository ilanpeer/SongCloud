import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Topbar from './Topbar';
import Explore from './Explore';
import Playlists from './Playlists';
import Songcard from './Songcard';
import Player from './Player';


export default class Root extends React.Component {

  constructor() {
    super();

    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
    this.changeName = this.changeName.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);

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
              "duration": 1,

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

  changeName(newName) {
    this.setState({
      playlists: Object.assign({}, newName)
      // should update title only: playlists: [ { title: newName } ]
    })
  }

  createPlaylist(event) {
    // this.props.history.push('/playlists');
    // console.log('createPlaylist(e)');
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
                            currentTrack={ this.state.currentTrack }
                            createPlaylist={ this.state.createPlaylist }
                            playlists={ this.state.playlists }
                            {...props}/>
          }}/>
          <Route exact path="/explore" component={() =>
            <Redirect to="/explore/trance"/>
          }/>

          <Route exact path="/playlists" render={ (props) => {
            return <Playlists updateCurrentTrack={ this.updateCurrentTrack }
                              changeName={ this.changeName }
                              playlists={ this.state.playlists }
                              createPlaylist={ this.state.createPlaylist }
                              currentTrack={ this.state.currentTrack }
                              {...props}/>
          }}/>
        </Switch>

        <Player track={ this.state.currentTrack }/>
      </div>
    )
  }

}

