import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './Greeting';

function alertMessage() {
  window.alert("Woohoo!");
}

const Root = (props) => {
  return (
  <div>

    <h1>Song Cloud</h1>

    <Greeting name="ilan"
              age='40'
              alert={ alertMessage }/>
  </div>
  );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));

