import React, { useState } from "react";
import "./styles/app.css";
// import Counnter from "./components/Counter";
// import ClassConter from './components/ClassCounter';
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Js", text: "aaa" },
    { id: 2, name: "Js2", text: "aaa1111" },
    { id: 3, name: "Js2", text: "aasss222a" },
  ]);

  function crateNewPost(newPost) {
    setPosts([...posts, newPost])
  }

  // const [posts2, setPosts2] = useState([
  //   { id: 1, name: "XXXXXXX", text: "aaa" },
  //   { id: 2, name: "XXXXXX", text: "aaa1111" },
  //   { id: 3, name: "XXXX", text: "aasss222a" },
  // ]);

  return (
    <div className="App">
      {/* <Counnter />
      <ClassConter /> */}
        <PostForm info = {{crateNewPost}}  />
      <Lists title="js" post1={posts} />
      {/* <Lists title="xxxs" post={posts2} /> */}
    </div>
  );
}

export default App;
