import React from 'react';

export default function Player() {

  return (
    <div className="playerfooter">
        <img alt="Song thumbnail" src="#"/>
        <p className="songtitle">Song Title: <span>title from SoundCloud API</span></p>
      <audio className="player" controls="controls">
          <source src="#" type="audio/mpeg"/>
        </audio>
    </div>
  );
};
