import React from 'react';

export default function Songcard(props) {

  return (
    <div className="songcard">
      <img className="cardimage" src={props.image}/>
      <p className="cardtitle">{props.title}</p>
      <p className="clock"> </p>
      <p className="cardduration">{props.duration}</p>
    </div>
  );
}

