import React from 'react';
import Songcard from './Songcard';
// import Pagination from './Pagination';
import Genrebar from './Genrebar';


export default class Explore extends React.Component {

  constructor() {
    super();
    this.state = {
      songs: [],
      songsLoading: 'loading...',
      offset: 0,
      limit: 15,
    };

  }


  loadSongs(props) {
    const xhr = new XMLHttpRequest();
    const genre = this.props.match.params.genre;
    const limit = this.state.limit;
    const offset = this.state.offset;

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${limit}&offset=${offset}&tags=${genre}`);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.loadSongs();
    }
    if (prevState.offset !== this.state.offset) {
      this.loadSongs();
    }

  }

  nextPage() {
    this.setState({
      offset: this.state.offset + this.state.limit
    })
  }

  prevPage() {
    this.setState({
      offset: this.state.offset - this.state.limit
    })
  }


  render() {

    switch (this.state.songsLoading) {
      case 'loading...':
        return <div className="loading"><i className="fa fa-spinner fa-pulse fa-3x fa-fw"/></div>;
      case 'error':
        return <div className="404">AMOD 404 CLASSY -----> Error!</div>;
      case 'loaded':
        return (
          <div className="first-div-return-from-explore-js">
            <div className="genrediv">
              <Genrebar
                genre={ this.props.match.params.genre }
              />
            </div>
            <div className="explorediv">
              <h1 className="exploretitle">Genre: {this.props.match.params.genre}</h1>
              <ul className="explorelist">
                {
                  this.state.songs.map((song, i) => <li className="cardunit" key={ song.id }>
                      <Songcard
                        image={ song.artwork_url }
                        title={ song.title }
                        duration={ song.duration }
                        currentTrack={ song }
                        updateCurrentTrack={ this.props.updateCurrentTrack }
                      />
                    </li>
                  )}
              </ul>
            </div>
            <div className="paginationdiv">
              <button onClick={this.prevPage.bind(this)}
                      className="prevpage"
                      disabled={this.state.offset === 0}>Prev
              </button>
              <p className="">page {this.state.offset / this.state.limit + 1} </p>
              <button onClick={this.nextPage.bind(this)} className="nextpage">Next</button>
            </div>
          </div>
        );
    }

  };

};

