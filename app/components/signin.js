import React from 'react';

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
          <span>Don't have an account yet? <a href="#">Create Account</a></span>
        </div>

      </form>
    </div>
  );
};

