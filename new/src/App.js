import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { usePosts } from "./hooks/use.Posts";
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./MyModal/MyModal";
import Button from "./UI/Button/Button";
import PostServiese from './API/PostServise';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect( () => {
    fetchPosts()
  }, [])

  function crateNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  async function fetchPosts() {
    const posts = await PostServiese.getAll()
    setPosts(posts);
  }

  return (
    <div className="App">
      <Button onClick={fetchPosts}>Получить инфу с сервера!</Button>
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
