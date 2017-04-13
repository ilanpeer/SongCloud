import { createStore, combineReducers } from 'redux';
import currentTrack from './reducers/current-track';
import playlists from './reducers/playlists';

const reducer = combineReducers({
  currentTrack,
  playlists
});

const store = createStore(reducer);

export default store;
