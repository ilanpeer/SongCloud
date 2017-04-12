export default function currentTrackReducer(currentTrack = null, action) {
  // console.log(action.song);

  if (action.type === 'CURRENT_TRACK') {
    return action.song;
  }
  return currentTrack;
}
