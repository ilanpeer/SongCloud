import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import Root from '../Root/Root';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={ Signin }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route path="/" component={ Root }/>
      </Switch>
    </BrowserRouter>
  )
}

