import './Player.scss'
import React from 'react';


export default function Player(props) {
  const songUrl = `${props.track.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  const title = String(props.track.title);
  // console.log('props.track.title --', title);

  if (!props.track) {
    return  <div className="playerfooter shifted"/>
  }

  function trimTitle(title) {
    if (title.length >= 32) {
      return title.slice(0, 32) + '...';
    }
    else {
      return title;
    }
  }

  return (
    <div className="playerfooter">
      <div className="player-left">
        <img alt="Song thumbnail" src={ props.track.artwork_url }/>
        <p className="playersongtitle"> { trimTitle(title) } </p>
      </div>
      <audio className="playerElm"
             src={ songUrl }
             controls
             autoPlay/>
    </div>
  );
};


//https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
//https://api.soundcloud.com/tracks/283158886/streamclient_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
