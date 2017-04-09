import './Sign.scss';
import React from 'react';
import {
NavLink
} from 'react-router-dom';

export default function Signup() {

  return (
    <div className="formgrid">
      <i className="fa fa-mixcloud signin-logo" aria-hidden="true"/>
      <h1>Song Cloud</h1>
      <form action="" method="">
        <h4>Create Account</h4>

        <label htmlFor="username">User Name</label>
        <input id="username" type="text"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="text"/>

        <button name="button" type="submit">Continue</button>

        <footer>
          <p>Already have an account? <NavLink to="/signin"> Sign In</NavLink></p>
        </footer>

      </form>
    </div>
  );
};
