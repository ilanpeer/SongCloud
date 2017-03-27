import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './Greeting';

const Root = () => {
  return (
    <div>
      <h1>Song Cloud</h1>
      <Greeting name="ilan"
                age='40'
      />
    </div>
  );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));

