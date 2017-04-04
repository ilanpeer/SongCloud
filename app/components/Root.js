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

    this.state = {
      currentTrack: {},
      playlists: []
    }
  }

  updateCurrentTrack(newSong) {
    this.setState({
      currentTrack: Object.assign({}, newSong)
    })
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
            return <Explore updateCurrentTrack={ this.updateCurrentTrack}
                            {...props}/>
          }}/>
          {/*<Route path="/explore/trance" component={ Explore }*/}
          {/*/>*/}
          <Route exact path="/explore" component={() =>
            <Redirect to="/explore/trance"/>
          }/>

          <Route exact path="/playlists" render={ () => {
            return <Playlists data={ this.state.currentTrack }
            />
          }
          }/>
        </Switch>

        <Player track={this.state.currentTrack}/>
      </div>
    )
  }

}

