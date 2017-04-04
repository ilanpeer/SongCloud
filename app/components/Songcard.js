import React from 'react';

export default function Songcard(props) {

  // const image = { song.artwork_url }
  // const title = { song.title }
  // const duration = { song.duration }

  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  function trimTitle(title) {
    if (title.length >= 32) {
      return title.slice(0, 32) + '...';
    }
    else {
      return title;
    }
  }

  const imgUrl = props.image ? props.image.replace('large', 't300x300') : props.image;


  return (
    <div className="songcard">
      <div className="cardimage"
           style={ {backgroundImage: `url(${imgUrl})`} }
           onClick={ () => props.updateCurrentTrack(props.currentTrack) }/>
      <p className="cardtitle">{trimTitle(props.title)}</p>
      <p className="cardduration"><i className="fa fa-clock-o" aria-hidden="true"/> {msToTime(props.duration)}</p>
      <i className="fa fa-heart-o cardheart" aria-hidden="true"/>
      <div> Add to playlist
        {/*<ul>*/}
          {/*<li>Playlist 1</li>*/}
          {/*<li>Playlist 2</li>*/}
          {/*<li>Playlist 3</li>*/}
          {/*<li>Playlist 4</li>*/}
        {/*</ul>*/}
      </div>
    </div>
  );
}

