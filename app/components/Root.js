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

    this.state = {
      currentTrack: {}
    }
  }

  updateCurrentTrack(newSong) {
    this.setState({
      currentTrack: Object.assign({}, newSong)
    })
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={ Signin }/>
          <Route exact path="/signup" component={ Signup }/>
          <Route path="/" component={ () => {
            return <div className="div-return-from-root-js">
              <Topbar/>
              <Switch>
                <Route exact path="/" component={() =>
                  <Redirect to="/explore"/> }/>

                <Route exact path="/explore" render={ (props) => {
                  return <Explore updateCurrentTrack={ this.updateCurrentTrack.bind(this)
                  }

                  /> }

                <Route path="/explore/:genre" component={ Explore }/>
                <Route exact path="/playlists" component={ Playlists }/>
              </Switch>
            </div>
          }
          }/>
        </Switch>
      </BrowserRouter>
    )
  };
}
