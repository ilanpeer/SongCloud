import React from 'react';
import Singup from './signup';
import Singin from './signin';
import Topbar from './topbar';
import Expolre from './explore';
import Playlists from './playlists';
import Player from './player';


export default function Root() {

  return (
    <div className="maindiv">
      <Topbar/>

      {/*<Singup/>*/}
      <Singin/>

      <main>
        {/*<Expolre/>*/}
        {/*<Playlists/>*/}
      </main>

      <Player/>

    </div>
  );
};
