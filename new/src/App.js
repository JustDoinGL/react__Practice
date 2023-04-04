import React from "react";
import { useState } from "react";
import Counnter from './components/Counter';

function App() {
  const [value, setValue] = useState("U can change it");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input value={value} onChange={element => setValue(element.target.value)} />
      <Counnter />
    </div>
  );
}

export default App;
