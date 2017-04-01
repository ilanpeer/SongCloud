import React from 'react';

export default function Player(props) {

  return (
    <div className="playerfooter">
        <img alt="Song thumbnail" src= { props.image } />
        <p className="playersongtitle"> title from  props.title</p>
      <audio className="player" controls="controls">
          <source src="#" type="audio/mpeg"/>
        </audio>
    </div>
  );
};
