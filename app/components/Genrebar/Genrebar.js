import './Genrebar.scss'
import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Genrebar(props) {

  // console.log(props.genre);

  return (
    <ul className="genrebar">
      <li><p>Genres: </p></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/all-music">all-music</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/hip-hop-rap">hip hop rap</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/house">house</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/rock">rock</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/pop">pop</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/reggaeton">reggaeton</NavLink></li>
      <li><NavLink exact activeClassName="selcetedgenre" to="/explore/dubstep">dubstep</NavLink></li>
    </ul>
  );
}

