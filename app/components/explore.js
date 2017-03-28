import React from 'react';

export default function Explore() {

  return (
    <div>
      <p>explore component</p>
      <div>
        <h4>Categories list:</h4>
        <ul>
          <li>DUBSTEP</li>
          <li>HOUSE</li>
          <li>PROGRESSIVE</li>
          <li>TECH</li>
          <li>TRANCE</li>
        </ul>
      </div>
      <div>
        <h4>List of songs:</h4>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </ul>
      </div>
      <h4>Current page number:</h4>
      <h2>1</h2>
      <div>
        <h4>Buttons Previous/Next:</h4>
        <button name="back-button">Back</button>
        <button name="next-button">Next</button>
      </div>


    </div>
  );
};


