import './Playlist1.scss'
import store from '../../store'
import React from 'react';
import Songcard from '../Songcard/Songcard';

export default class Playlist1 extends React.Component {

  constructor() {
    const newPlaylist = store.getState().playlists;
    // console.log(store.getState().playlists);

    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleInput = this.toggleInput.bind(this);

    this.state = {
      playlists: [],
      cardmode: 'playlist',
      title: 'Untitled',
      edit: false,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.state.title) {
      this.setState({
        title: nextProps.title
      })
    }
  }

  toggleInput() {
    this.setState({
      edit: !this.state.edit
    });
    this.inputElm.focus()
  }

  handleChange(event) {
    console.log(event);
    this.setState({title: event.target.value});

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updatePlaylistName(event.target.title, event.target.playlists);

    this.setState({
      edit: false
    })
  }


  render() {
    const editTitle = this.state.edit ? 'playlist-header hidden' : 'playlist-header';
    const editInput = this.state.edit ? 'playlist-header' : 'playlist-header hidden';
    // console.log(this.state.title);
    return (
      <div className="first-return-from-playlist1">
        <div className="playlists-right">
          <form onSubmit={ this.handleSubmit }>
            <div className={ editTitle }>
              <p onClick={ () => {
                this.toggleInput()
              }}> { this.props.title }
                <span className="playlist-badge">5</span>
              </p>
            </div>
            <div className={ editInput }>
              <input ref={(input) => {
                this.inputElm = input
              }} className="input-title" type="text" defaultValue={ this.props.title }
                     onChange={ () => this.handleChange }/>
            </div>
            <button className="delete-list-btn">Delete
            </button>
          </form>
        </div>
        <div className=" playlist-body">
          <div>
            <ul className=" playlist-songs">
              {
                this.props.songs.map((song, i) => <li className=" cardunit" key={ song.id }>
                    <Songcard
                      addNewPlaylist={this.props.addNewPlaylist}
                      song={ song }
                      playlists={ this.props.playlists }
                      currentTrack={ this.props.handleSongClick }
                      cardmode={ this.state.cardmode }
                    />
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
