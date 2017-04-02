import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Pagination() {

  // const genre = props.genre;
  // console.log(props);

  return (
    <div className="paginationdiv">
      <button className="prevpage">Prev</button>
      <p className="">page #num </p>
      <button role="link" className="nextpage">Next</button>
    </div>
  );
}

