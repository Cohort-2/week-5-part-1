//state and component

import { useState } from "react";

// let state = {
//   count: 0, // this is my state
// }; // according to react this is not a state variable you cannot import anything and say its state you need to do it in a certain way that react watches it and updates the state

// now lets define state a different way

//jsx
// in html its like this
// <button onClick="onButtonPress()">Counter {state.count}</button>
// in jsx its like this
// <button onClick={onButtonPress}>Counter {state.count}</button>
// now i want on click of the button the state should update

const App = () => {
  const [count, setCount] = useState(0);

  // function onButtonPress() {
  //   // state.count++; // till now nothing happens
  //   // console.log(state.count);
  //   // count = count + 1; // this is not the right way to update state
  //   setCount(count + 1); // this is the right way to update state
  // }

  return (
    <div>
      {/* <button onClick={onButtonPress}>Counter {count}</button> */}
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
};

// effectively we are creating a custom button component
function CustomButton(props) {
  function onButtonPress() {
    props.setCount(props.count + 1);
  }

  return (
    <>
      <button onClick={onButtonPress}>counter {props.count}</button>
    </>
  );
  // this is a custom button
}

export default App;
