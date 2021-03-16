import React, { useState, useEffect } from 'react';
import './App.css';

function App () {
  let [counter, setCounter] = useState(0);

  useEffect( () => {
    document.title = `Button has been clicked ${counter} times`;
  });

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>You've clicked the button {counter} times so far.</p>
      <button className="increase" onClick={() => setCounter(counter + 1)}>INCREASE</button>
      <button className="decrease" onClick={() => setCounter(counter - 1)}>DECREASE</button>
      
    </div>

  );
}

export default App;


