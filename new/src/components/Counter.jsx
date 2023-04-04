import React from "react";
import { useState } from "react";

const Counnter = () => {
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
    setLikes(likes - likes);
  }

  return (
    <>
      <h1>{likes}</h1>
      <label>
        ВВедите число лайков:
        <input type="number" min='0' value={likes} onChange={element => setLikes(Number(element.target.value))}  />
      </label>
      <button onClick={on}>++++++++</button>
      <button onClick={out}>--------</button>
      <button onClick={ziro}>00000000000</button>
    </>
  );
};

export default Counnter;
