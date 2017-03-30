import React from 'react';
import Songcard from './Songcard';

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songsLoading: 'loading...'
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance');
    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }

  render() {
    // console.log('state', this.state.songsLoading);
    switch (this.state.songsLoading) {
      case 'loading...':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      case 'loaded':
        return (
          <div>
            <ul>
              {
                this.state.songs.map((song, i) => <li key={ song.id }>
                    <Songcard
                      image={ song.artwork_url }
                      title={ song.title }
                      duration={ song.duration }
                    />
                  </li>
                )}
            </ul>
          </div>
        );
    }

  };

};

