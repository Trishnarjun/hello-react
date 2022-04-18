import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={()=>{console.log(props.setName(""))}}>Reset</button>
  )
};

const Application = () => {

  const [name, setName] = useState("");

  // your code here

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder='Type your name'/>
      <div> 
        <Button setName={setName}/>
      </div>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
