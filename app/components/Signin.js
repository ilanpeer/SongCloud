import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Signin() {

  return (
    <div className="formgrid">
      <i className="fa fa-mixcloud signin-logo" aria-hidden="true"/>
      <h2>SongCloud</h2>
      <form action="" method="">
        <h4>Sign In</h4>

        <label htmlFor="email">Email</label>
        <input id="email" type="text"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="text"/>

        <button name="button" type="submit">Continue</button>

        <div>
          <span>Don't have an account yet? <NavLink to="/signup"> Create Account</NavLink></span>
        </div>

      </form>
    </div>
  );
};

