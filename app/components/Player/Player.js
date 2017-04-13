import './Player.scss'
import React from 'react';
import {connect} from "react-redux";

function Player(props) {
  // const storeData = store.getState();
  // console.log(storeData.currentTrack);

  if (!props.currentTrack) {
    return <div className="playerfooter shifted"/>
  }
  else {
    const songUrl = `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
    const title = String(props.currentTrack.title);

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
          <img alt="Song thumbnail" src={ props.currentTrack.artwork_url }/>
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

function mapStateToProps(stateData) {
  return {
    currentTrack: stateData.currentTrack
  }
}

export default connect(mapStateToProps)(Player);
