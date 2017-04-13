import uuid from 'uuid';

// TODO: the old function had:
// const copiedPlaylists = [...this.state.playlists];
// const newPlaylist = {id: uuid(), title: 'Untitled', songs: []};
// copiedPlaylists.splice((this.state.playlists.length - 1 + 1), 0, newPlaylist);

const dummyData = {
  playlists: [
    {
      id: 111,
      title: 'Dynamic playlist name',
      songs: [
        {
          "id": 25071174,
          "title": "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
          "duration": 1000,

          "stream_url": "https://api.soundcloud.com/tracks/250711755/stream",
          "uri": "https://api.soundcloud.com/tracks/250711755",
          "artwork_url": "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
        }]
    },
    {
      id: 222,
      title: 'my 2nd playlist',
      songs: [
        {
          "id": 250711755,
          "title": "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
          "duration": 219082,
          "stream_url": "https://api.soundcloud.com/tracks/250711755/stream",
          "uri": "https://api.soundcloud.com/tracks/250711755",
          "artwork_url": "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
        }]
    }
  ]
};


export default function playlistReducer(playlistTemp = dummyData, action) {
  // console.log(action);

  switch (action.type) {
    case 'NEW_PLAYLIST_BTN':
      const copiedPlaylists = [...playlistTemp];
      const newPlaylist = {id: uuid(), title: 'Untitled', songs: []};
      copiedPlaylists.splice((copiedPlaylists.length - 1 + 1), 0, newPlaylist);
      return {
        copiedPlaylists
      };
    case 'NEW_PLAYLIST_FROM_EXPLORE':
      return {
        playlistTemp

      };

    default:
      return {
        playlistTemp
      }
  }

}
