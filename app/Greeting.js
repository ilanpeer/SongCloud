/**
 * Created by ilan on 26/03/2017.
 */

export default function Greeting(props) {
  console.log("props", props);
  return (
    <div>
      <h2>Hi, my name is {props.name}, and my age is {props.age}.</h2>
      <input onClick={ props.alert } type="button" value="Clickety Clack"/>
    </div>
  )
}
