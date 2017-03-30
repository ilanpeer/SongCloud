import React from 'react';

export default function Songcard(props) {

  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  // console.log(msToTime(414575));
  return (
    <div className="songcard">
      <img className="cardimage" src={props.image}/>
      <p className="cardtitle">{props.title}</p>
      <p className="cardduration"><i className="fa fa-clock-o" aria-hidden="true"/> {msToTime(props.duration)}</p>
    </div>
  );
}

