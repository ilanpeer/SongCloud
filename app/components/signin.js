import React from 'react';

export default function Signin() {

  return (
    <div className="formlayout">
      <i className="fa fa-mixcloud signin-logo" aria-hidden="true"/>
      <h2>SongCloud</h2>
      <form action="" method="">
        <h4>Sign In</h4>

        <label htmlFor="username">User Name</label>
        <input id="username" type="text"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="text"/>

        <button name="button" type="submit">Continue</button>

        <footer>
          <p>Don't have an account yet? <a>Create Account</a></p>
        </footer>

      </form>
    </div>
  );
};

