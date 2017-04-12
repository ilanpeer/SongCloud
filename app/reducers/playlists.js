export default function playlistReducer(playlist = [], action) {
  if (action.type === 'UPDATE_PLAYLIST') {
    return playlist;
  }

  return playlist;
}
