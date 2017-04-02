import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Singup from './Signup';
import Singin from './Signin';
import Topbar from './Topbar';
import Explore from './Explore';
import Playlists from './Playlists';
import Songcard from './Songcard';
import Player from './Player';


export default function Root() {

  return (
    <BrowserRouter>
      <div className="maindiv">
        <Topbar/>
        <Switch>
          <Route exact path="/" component={ () =>
            <Redirect to="/explore/trance"/> }/>
          <Route path="/explore/:genre" component={ Explore }/>
          <Route exact path="/playlists" component={ Playlists }/>
        </Switch>
        <Player/>
      </div>
    </BrowserRouter>
  );
};
