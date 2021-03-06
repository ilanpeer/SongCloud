import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Explore from '../Explore/Explore';
import Playlists from '../Playlists/Playlists';
import Player from '../Player/Player';

export default class Root extends React.Component {

  constructor() {
    super();

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


  render() {
    return (
      <div className="div-return-from-root-js">
        <Topbar/>

        <Switch>
          <Route exact path="/" component={() =>
            <Redirect to="/explore"/>
          }/>
          <Route exact path="/explore/:genre" render={ (props) => {
            return <Explore playlists={ this.state.playlists }
                            match={this.props.match}/>
          }}/>
          <Route exact path="/explore" component={() =>
            <Redirect to="/explore/trance"/>
          }/>

          <Route exact path="/playlists" render={ (props) => {
            return <Playlists playlists={ this.state.playlists }
                              match={this.props.match}
                              addNewPlaylist={this.props.addNewPlaylist}
                              {...props}/>
          }}/>
        </Switch>

        <Player/>
      </div>
    )
  }

}
