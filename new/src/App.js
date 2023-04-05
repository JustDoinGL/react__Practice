import React, { useState } from "react";
import "./styles/app.css";
// import Counnter from "./components/Counter";
// import ClassConter from './components/ClassCounter';
import Lists from "./components/Lists/Posts/Lists";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Js", text: "aaa" },
    { id: 2, name: "Js2", text: "aaa1111" },
    { id: 3, name: "Js2", text: "aasss222a" },
  ]);

  // const [posts2, setPosts2] = useState([
  //   { id: 1, name: "XXXXXXX", text: "aaa" },
  //   { id: 2, name: "XXXXXX", text: "aaa1111" },
  //   { id: 3, name: "XXXX", text: "aasss222a" },
  // ]);

  const [title, setTitile] = useState("");

  function addNewPost(e) {
    e.preventDefault();
    return (
      <>
        <Input
          value={title2+title}
          onChange={(element) => {
            setTitile(element.target.value);
          }}
          type="text"
          placeholder="ВВедите название"
        />
      </>
    );
  }

  const [title2, setTitile2] = useState("");

  return (
    <div className="App">
      {/* <Counnter />
      <ClassConter /> */}
      <form>
        <Input
          value={title}
          onChange={(element) => {
            setTitile(element.target.value);
          }}
          type="text"
          placeholder="ВВедите название"
        />
        <Input
          value={title2}
          onChange={(element) => {
            setTitile2(element.target.value);
          }}
          type="text"
          placeholder="ВВедите текст"
        />
        <Button onClick={addNewPost}>Сравнить</Button>
      </form>
      <Lists title="js" post={posts} />
      {/* <Lists title="xxxs" post={posts2} /> */}
    </div>
  );
}

export default App;
