import React, { useState } from "react";
import "./styles/app.css";
// import Counnter from "./components/Counter";
// import ClassConter from './components/ClassCounter';
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";
import Select from "./UI/Select/Select";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "zzz", text: "aaa" },
    { id: 2, name: "xxx", text: "aaa1111" },
    { id: 3, name: "aaa", text: "aasss222a" },
  ]);

  // const [posts2, setPosts2] = useState([
  //   { id: 1, name: "XXXXXXX", text: "aaa" },
  //   { id: 2, name: "XXXXXX", text: "aaa1111" },
  //   { id: 3, name: "XXXX", text: "aasss222a" },
  // ]);

  const [selecterSord, setSelecterSord] = useState('')

  function crateNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const postSorted = (sort) => {
    setSelecterSord(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      {/* <Counnter />
      <ClassConter /> */}
      <PostForm info={{ crateNewPost }} />
      <hr style={{ margin: "12px" }} />

      <Select
      onChange={postSorted}
      value={selecterSord}
        options={[
          { value: "name", sort: "По названию" },
          { value: "text", sort: "По тексту" },
        ]}
        defaultValue={"Сортировка"}
      />

      {posts.length !== 0 ? (
        <Lists title="js" post1={posts} removePost={removePost} />
      ) : (
        <h1 style={{ textAlign: "center", fontWeight: "22px" }}>
          Посты не найдены!
        </h1>
      )}
      {/* <Lists title="xxxs" post={posts2} /> */}
    </div>
  );
}

export default App;
