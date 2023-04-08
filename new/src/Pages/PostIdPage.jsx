import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServiese from "./../API/PostServise";
import { useFeatching } from "../hooks/useFeatching";
import Loader from "./../UI/Loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState(1);
  const [comments, SetComments] = useState([]);

  const [fetcPostingById, isLoading, error] = useFeatching(async (id) => {
    const response = await PostServiese.getById(params.id);
    setPost(response.data);
  });

  const [fetcPostingCommit, isComLoading, errorCoM] = useFeatching(
    async (id) => {
      const response = await PostServiese.getComments(params.id);
      SetComments(response.data);
    }
  );

  useEffect(() => {
    fetcPostingById(params.id);
    fetcPostingCommit(params.id);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>
        Вы открыли пост - {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center", fontSize: "40px" }}>
          {post.title}
        </div>
      )}
      <h1>Коментарии:</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center", fontSize: "40px" }}>
            {console.log(comments)}
          {comments.map((c) =>
            <div style={{margin:'25px', border:'2px solid black'}}>
                <h5>{c.email}</h5>
                <p>{c.body}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PostIdPage;
