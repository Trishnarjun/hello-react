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

  const [name, setName] = useState("trishnarjun");

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input placeholder='Type your name'/>
      <div> 
        <Button/>
      </div>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
