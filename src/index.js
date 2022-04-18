import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={()=>{console.log("reset")}}>Reset</button>
  )
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <div> 
        <Button/>
      </div>
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
