import React from 'react';
import Songcard from './Songcard';
import Pagination from './Pagination';
import Genrebar from './Genrebar';
import {
  NavLink
} from 'react-router-dom';

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songsLoading: 'loading...'
    };
  }

  loadSongs() {
    const xhr = new XMLHttpRequest();
    const genre = this.props.match.params.genre;
    console.log('log = this.props.match.params: ', this.props.match.params);

    xhr.open('GET', `https://create-bootcamp-songcloud-server.now.sh/tracks?genre=${genre}`);
    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();

  }

  componentDidMount() {
    this.loadSongs();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.genre === this.props.match.params.genre)
      return;
    this.loadSongs();
  }

  render() {

    switch (this.state.songsLoading) {
      case 'loading...':
        return <div className="loading">KAN TAVO ANIMATZIA SHEL -----> Loading...</div>;
      case 'error':
        return <div className="404">AMOD 404 CLASSY -----> Error!</div>;
      case 'loaded':
        return (
          <div className="first-div-return-from-explore">
            <div className="genrediv">
              <Genrebar
              />
            </div>
            <div className="explorediv">
              <h1 className="exploretitle">Genre: get from current/active this.state.songs.genre</h1>
              <ul className="explorelist">
                {
                  this.state.songs.map((song, i) => <li className="cardunit" key={ song.id }>
                      <Songcard
                        image={ song.artwork_url }
                        title={ song.title }
                        duration={ song.duration }
                      />
                    </li>
                  )}
              </ul>
            </div>
            <Pagination
              />
          </div>
        );
    }

  };

};

