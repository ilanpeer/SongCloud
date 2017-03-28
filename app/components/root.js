import React from 'react';
import Singup from './signup';
import Singin from './signin';
import Topbar from './topbar';
import Expolre from './explore';
import Playlists from './playlists';
import Player from './player';


export default function Root() {

  return (
    <div>
      <h1>Song Cloud</h1>
      <Singup/>
      <Singin/>

      <Topbar/>

      <main>
        <Expolre/>
        <Playlists/>
       </main>

      <Player/>

    </div>
  );
};
