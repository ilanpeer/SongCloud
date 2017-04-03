import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Genrebar(props) {

  console.log(props.genre);

  return (
    <ul className="genrebar">
      <li><p>Genres: </p></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/trance">${props.genre}</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/house">${props.genre}</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/dubstep">${props.genre}</NavLink></li>
    </ul>
  );
}

