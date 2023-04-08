import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServiese from "./../API/PostServise";
import { useFeatching } from "../hooks/useFeatching";
import Loader from "./../UI/Loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState(1);
  const [fetcPostingById, isLoading, error] = useFeatching(async (id) => {
    const response = await PostServiese.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetcPostingById(params.id);
  }, []);

  return (
    <>
      <h1 style={{textAlign:'center', fontSize:'40px'}}>Вы открыли пост - {params.id}</h1>
      {isLoading ? <Loader  /> : <div style={{textAlign:'center', fontSize:'40px'}}> {post.title}</div>}
    </>
  );
}

export default PostIdPage;
