import React from 'react';


export default function Player(props) {
  const songUrl = `${props.track.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;

  // console.log('Player.js props', props.track);

  return (
    <div className="playerfooter">
      <div>
        <img alt="Song thumbnail" src= { props.track.artwork_url } />
      </div>
        <p className="playersongtitle"> {props.track.title} </p>
      <audio className="playerElm"
             src={ songUrl }
             controls
             autoPlay/>
    </div>
  );
};


//https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
//https://api.soundcloud.com/tracks/283158886/streamclient_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
