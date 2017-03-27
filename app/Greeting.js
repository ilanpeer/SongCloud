/**
 * Created by ilan on 26/03/2017.
 */
// TODO: ESlint disabled.
import React from 'react';


/**
 * Dumb component.
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
 * Smart component.
 */
export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isVisible: true,
      unicorn: false
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
      return <div><h2>Hi, my name i{ this.props.hide }....</h2><img src="https://img.clipartfest.com/5ee544cca5d8c8d8b8c18b8327c48f15_clip-art-illustration-of-a-clipart-counting-sheep-at-night_2400-1246.jpeg"/></div>
    }
    else {
      return <h2>Hi, my name is { this.props.name }, i'm { this.props.age } years old.</h2>
    }

  }

  // unicorn() {
  //   if (this.state.unicorn === true) {
  //     return <div><img src="http://www.pluggedin.com/content/images/content-image/unicorn.gif"/></div>;
  //   }
  //
  // }

  render() {
    const Visibility = this.state.isVisible ? <div><p>This button has been pressed: { this.state.count } times.</p>        <input onClick={ () => this.handleIncrement() } type="button" value="Click"/>
    </div> : null;


    return (
      <div>
        <input onClick={ () => this.showTitle() } type="button" value="Show Counter"/>
        { this.showHide() }
        { Visibility }
        {/*{ this.unicorn }*/}
      </div>
    );

  }
};
