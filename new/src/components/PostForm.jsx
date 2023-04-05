import React from "react";
import Input from "../UI/Input/Input";
import Button from "./../UI/Button/Button";
import { useState } from "react";

function PostForm(props) {
  const label = props.info;

  const [post, setPost] = useState({ text: "", name: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    label.crateNewPost(newPost);
    setPost({ text: "", name: "" });
  }
  return (
    <form>
      <Input
        value={post.name}
        onChange={(element) => {
          setPost({ ...post, name: element.target.value });
        }}
        type="text"
        placeholder="ВВедите название"
      />
      <Input
        value={post.text}
        onChange={(element) => {
          setPost({ ...post, text: element.target.value });
        }}
        type="text"
        placeholder="ВВедите текст"
      />
      <Button onClick={addNewPost}>Cоздать пост</Button>
    </form>
  );
}

export default PostForm;
