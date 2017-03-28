import Greeting from './Greeting.js';
import React from 'react';

export default function Root() {
  const data = {
    name: 'ilan',
    age: 40,
    extra: "zzzzzzzzzzzzzz"
  };

  return (
    <div>
      <h1>Song Cloud</h1>
      <Greeting name={ data.name }
                age= { data.age }
                hide= { data.extra }
      />

      {/*Song Cloud
      <Singup/>
      <Singin/>

      <Topbar/>
      <Expolre/>


      */}
    </div>
  );
};
