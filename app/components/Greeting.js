/**
 * Created by ilan on 26/03/2017.
 */
// TODO: ESlint disabled.
import React from 'react';


/**
 * Dumb component AKA Function.
 */
// export default function Greeting(props) {
//   // console.log("props", props);
//   return (
//     <div>
//       <h2>Click the button to find name and age.</h2>
//       <input onClick={ props.alert } type="button" value="Click"/>
//     </div>
//   )
// }

/**
 * Smart component AKA Class.
 */
export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isVisible: true,
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0
        }
      ]
    }
  }

  handleIncrement() {
    let counter = this.state.count;
    const people = this.state.people;
    counter += 1;

    const killsInc = people.map((value, index) => {
      // console.log('The value from Map Func', value);
      return Object.assign({}, value, {kills: counter});
    }
  );

    this.setState({
      count: counter,
      people: killsInc
    })
  }

  showTitle() {
    // if (this.state.isVisible) {
    //   this.setState({
    //     isVisible: false
    //   });
    // }
    // else {
    //   this.setState({
    //     isVisible: true
    //   });
    // }
    this.setState({
      isVisible: !this.state.isVisible,
      //unicorn: true
    })

  }

  showHide() {
    if (this.state.isVisible === false) {
      return <div><h2>Hi, my name i{ this.props.hide }....</h2><img
        src="https://img.clipartfest.com/5ee544cca5d8c8d8b8c18b8327c48f15_clip-art-illustration-of-a-clipart-counting-sheep-at-night_2400-1246.jpeg"/>
      </div>
    }
    else {
      return <h2>Hi, my name is { this.props.name }, i'm { this.props.age } years old.</h2>
    }

  }

  createPeople() {
    return (
      <ul className="people-list">
        {this.state.people.map((value, index) => {
          return <li key={ value.name }>{ value.name + ' killed ' + value.kills } fed students.</li>;
        })}
      </ul>
    )
  }

  visibility() {
    if (this.state.isVisible === true) {
      return <div><p>This button has been pressed: { this.state.count } times.</p><input
        onClick={ () => this.handleIncrement() } type="button" value="Click"/></div>;
    }
  }

  render() {

    return (
      <div>
        <input onClick={ () => this.showTitle() } type="button" value="Show Counter"/>
        { this.showHide() }
        { this.visibility() }
        { this.createPeople() }
      </div>
    );

  }
};
