import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { usePosts } from "./hooks/usePosts";
import Lists from "./components/Lists/Posts/Lists";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./MyModal/MyModal";
import Button from "./UI/Button/Button";
import PostServiese from "./API/PostServise";
import Loader from "./UI/Loader/Loader";
import { useFeatching } from "./hooks/useFeatching";
import { getPageCount, getPagesArray } from "./utils/page";
import Pagination from "./UI/Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFeatching(async () => {
    const response = await PostServiese.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAddSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (e) => {
    setPage(e);
  };

  function crateNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <Button onClick={fetchPosts}>Новый запрос на сервер</Button>
      <Button onClick={() => setModal(true)}> Добавить новый пост</Button>

      <MyModal viseble={modal} setViseble={setModal}>
        <PostForm info={{ crateNewPost }} setViseble={setModal} />
      </MyModal>
      <hr style={{ margin: "12px" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>Произошла ошибка {postError}</h1>}

      {isPostLoading ? (
        <Loader />
      ) : (
        <Lists title="js" info={{ removePost, sortedAddSearchedPosts }} />
      )}
      <Pagination changePage={changePage} totalPages={totalPages} page={page} />
    </div>
  );
}

export default App;
