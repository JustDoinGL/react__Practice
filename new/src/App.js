import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { usePosts } from "./hooks/use.Posts";
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./MyModal/MyModal";
import Button from "./UI/Button/Button";
import PostServiese from "./API/PostServise";
import Loader from "./UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostLoading, setisPostLoading] = useState(false);

  const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  function crateNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  async function fetchPosts() {
    setisPostLoading(true);
    const posts = await PostServiese.getAll();
    setTimeout(async () => {
      setPosts(posts);
      setisPostLoading(false);
    }, 1000);
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

      {isPostLoading ? (
        <Loader />
      ) : (
        <Lists title="js" info={{ removePost, sortedAddSearchedPosts }} />
      )}
    </div>
  );
}

export default App;
