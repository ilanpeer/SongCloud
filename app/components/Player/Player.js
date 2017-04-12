import './Player.scss'
import React from 'react';
import store from '../../store'


export default function Player() {
  const storeData = store.getState();
  console.log(storeData.currentTrack);

  if (!storeData.currentTrack) {
    return  <div className="playerfooter shifted"/>
  }
  else {
  const songUrl = `${storeData.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  const title = String(storeData.currentTrack.title);

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
        <img alt="Song thumbnail" src={ storeData.currentTrack.artwork_url }/>
        <p className="playersongtitle"> { trimTitle(title) } </p>
      </div>
      <audio className="playerElm"
             src={ songUrl }
             controls
             autoPlay/>
    </div>
  );
}
}
