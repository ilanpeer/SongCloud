import React from 'react';

export default function Player() {

  return (
    <div>
      <p>Player component</p>
      <img alt="Song thumbnail" src="#"/>
      <span>Song Title: boom boom</span>
      <audio controls="controls">
        <source src="#" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

    </div>
  );
};
