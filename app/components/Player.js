import React from 'react';

export default function Player(props) {

  return (
    <div className="playerfooter">
      <div>
        <img alt="Song thumbnail" src= { props.image } />
      </div>
        <p className="playersongtitle"> title from  props.title</p>
      <audio className="playerElm" controls>
        <source src="---"
                type="audio/ogg"/>
      </audio>
    </div>
  );
};


//https://api.soundcloud.com/tracks/79973942/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
