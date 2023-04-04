import React from "react";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function on() {
    setLikes(likes + 1);
  }

  function out() {
    if (likes != 0) {
      setLikes(likes - 1);
    }
  }

  
  function ziro() {
    setLikes(likes-likes)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={on}>++++++++</button>
      <button onClick={out}>--------</button>
      <button onClick={ziro}>00000000000</button>
    </div>
  );
}

export default App;
