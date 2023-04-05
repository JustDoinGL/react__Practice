import React from "react";
import Input from "../UI/Input/Input";
import Button from "./../UI/Button/Button";

function PostForm(props) {
  const label = props.info;

  function addNewPost(e) {
    e.preventDefault();
    label.setPosts([...label.posts, { ...label.post, id: Date.now() }]);
    label.setPost({ title: "", body: "" });
  }
  return (
    <form>
      <Input
        value={label.post.name}
        onChange={(element) => {
            label.setPost({ ...label.post, name: element.target.value });
        }}
        type="text"
        placeholder="ВВедите название"
      />
      <Input
        value={label.post.text}
        onChange={(element) => {
            label.setPost({ ...label.post, text: element.target.value });
        }}
        type="text"
        placeholder="ВВедите текст"
      />
      <Button onClick={addNewPost}>Cоздать пост</Button>
    </form>
  );
}

export default PostForm;
