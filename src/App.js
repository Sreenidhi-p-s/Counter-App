import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState(0);
  const bg = ["sandybrown", "coral", "lightcoral"];
  const [color, setColor] = useState(bg[0])

  const onAdd = () => {
    setOutput(output+1);
    setColor(bg[1]);
  }

  const onMinus = () => {
    setOutput(output-1);
    setColor(bg[2]);
  }

  return (
    <div className="App">
      <div className="main-card">
        <div className="sub-card">
          <h1 className="heading">COUNTER</h1>
          <h1 className="output">{output}</h1>
          <div className="flex-wrap">
            <button className="add" onClick={onAdd} style={{backgroundColor:color}}>+</button>
            <button className="minus" onClick={onMinus} style={{backgroundColor:color}}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
