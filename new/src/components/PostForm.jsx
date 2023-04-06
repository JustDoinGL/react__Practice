import React from "react";
import Input from "../UI/Input/Input";
import Button from "./../UI/Button/Button";
import { useState } from "react";

function PostForm(props) {
  const label = props.info;

  const [post, setPost] = useState({ id: "", title: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    label.crateNewPost(newPost);
    setPost({ id: "", title: "" });
  }

  return (
    <form>
      <Button
        onClick={(e) => {
          e.preventDefault();
          props.setViseble(false);
        }}
      >
        Закрыть
      </Button>
      <Input
        value={post.title}
        onChange={(element) => {
          setPost({ ...post, title: element.target.value });
        }}
        type="id"
        placeholder="ВВедите название"
      />
      <Input
        value={post.id}
        onChange={(element) => {
          setPost({ ...post, id: element.target.value });
        }}
        type="id"
        placeholder="ВВедите текст"
      />
      <Button onClick={addNewPost}>Cоздать пост</Button>
    </form>
  );
}

export default PostForm;
