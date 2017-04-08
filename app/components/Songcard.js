import React from 'react';


export default class Songcard extends React.Component {


  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
      mode: " ",
    };

  }

  dropToggleFunc() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    })
  }

  componentDidMount() {

  }

  render() {
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

    // console.log(this.props.mode);

    function songCardOrigin() {
      if(this.state.mode === 'explore') {

      }

    }

    const imgUrl = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : this.props.song.artwork_url;

    const dropToggle = this.state.isDropdownOpen ? 'dropdown' : 'dropdown hidden';

    return (
      <div className="songcard">
        <div className="cardimage"
             style={ {backgroundImage: `url(${imgUrl})`} }
             onClick={ () => this.props.updateCurrentTrack(this.props.song) }/>
        <p className="cardtitle">{trimTitle(this.props.song.title)}</p>
        <p className="cardduration"><i className="fa fa-clock-o"
                                       aria-hidden="true"/> {msToTime(this.props.song.duration)}
        </p>
        <div className="heart-icon">
          <i className="fa fa-heart-o cardheart" aria-hidden="true"
             onClick={ this.dropToggleFunc.bind(this) }/>
        </div>

        <div className={ dropToggle }>
          <div className="dropdown-title">
            <p>Add to playlist</p>
            <button onClick={ this.props.createPlaylist } className="dropdown-create-playlist-btn">Create playlist+
            </button>
          </div>
          <div className="dropdown-body">
            <ul className="dropdown-lists">
              {this.props.playlists.map((playlist, i) => <li className="list-name" key={ playlist.id }>
                {playlist.title}
              </li>)}
            </ul>

          </div>
        </div>
      </div>
    );
  }

}
