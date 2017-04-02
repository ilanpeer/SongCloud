import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Genrebar(props) {

  const genre = props.genre;
  // console.log(props.genre);

  return (
    <div className="">
      <ul className="genrebar">
        <li><p>Genres: </p></li>
        <li><NavLink exact activeClassName="selcetedgenre" to="/explore/trance">Trance</NavLink> </li>
        <li><NavLink exact activeClassName="selcetedgenre" to="/explore/house">House</NavLink></li>
        <li><NavLink exact activeClassName="selcetedgenre" to="/explore/dubstep">Dubstep</NavLink></li>
      </ul>
    </div>
  );
}

