import React from 'react';

export default function Player(props) {

  return (
    <div className="playerfooter">
        <img alt="Song thumbnail" src= { props.image } />
        <p className="playersongtitle"> title from  props.title</p>
      <audio className="playerElm" controls>
        <source src="https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z"
                type="audio/ogg"/>
      </audio>
    </div>
  );
};

