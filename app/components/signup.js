import React from 'react';

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
          <p>Already have an account?<a>Sign In</a></p>
        </footer>

      </form>
    </div>
  );
};
