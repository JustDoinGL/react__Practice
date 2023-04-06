import React, { useMemo, useState } from "react";
import "./styles/app.css";
import {usePosts} from './hooks/use.Posts'
// import Counnter from "./components/Counter";
// import ClassConter from './components/ClassCounter';
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./MyModal/MyModal";
import Button from "./UI/Button/Button";

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

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query)

  function crateNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }


  return (
    <div className="App">
      {/* <Counnter />
      <ClassConter /> */}
      <Button onClick={() => setModal(true)}> Показать</Button>

      <MyModal viseble={modal} setViseble={setModal}>
        <PostForm info={{ crateNewPost }} setViseble={setModal} />
      </MyModal>
      <hr style={{ margin: "12px" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <Lists title="js" info={{ removePost, sortedAddSearchedPosts }} />

      {/* <Lists title="xxxs" post={posts2} /> */}
    </div>
  );
}

export default App;
