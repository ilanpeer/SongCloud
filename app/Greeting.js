/**
 * Created by ilan on 26/03/2017.
 */
// TODO: ESlint disabled.
import React from 'react';


// Dummy component.
// export default function Greeting(props) {
//   // console.log("props", props);
//   return (
//     <div>
//       <h2>Click the button to find name and age.</h2>
//       <input onClick={ props.alert } type="button" value="Click"/>
//     </div>
//   )
// }


// Smart component.
export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isVisible: true
    }
  }

  handleIncrement() {
    let counter = this.state.count;
    counter += 1;
    // counterState = Object.assign({}, counter, {count: counter.count + 1});

    this.setState({
      count: counter
    });
  }

  showTitle() {
    // if (this.state.isVisible) {
    //
    //   this.setState({
    //     isVisible: false
    //   });
    //
    // }
    // else {
    //   this.setState({
    //     isVisible: true
    //   });
    // }

    let newVisible = !this.state.isVisible;
      this.setState({
        isVisible: newVisible
    })
  }

  render() {
    const Visibility = this.state.isVisible ? <p>This button has been pressed: { this.state.count } times.</p> : null;


    return (
      <div>
        <h2>Hi, my name is { this.props.name }, i'm { this.props.age }'s years old.</h2>
        { Visibility }
        <input onClick={ () => this.handleIncrement() } type="button" value="Click"/>
        <br/>
        <input onClick={ () => this.showTitle() } type="button" value="Toggle Visibility"/>

      </div>
    );

  }
};
