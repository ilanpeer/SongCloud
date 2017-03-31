import React from 'react';

export default function Genrebar(props) {


  console.log(props.genrename);
  // console.log(x(props.genre));
  return (
    <div className="">
      <h4 className="genretitle">{props.genrename}</h4>
    </div>
  );
}

