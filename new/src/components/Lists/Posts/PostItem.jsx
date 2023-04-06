import React from "react";
import Button from "../../../UI/Button/Button";

function PostItem(props) {
  let p = props.post;

  return (
    <div className="item">
      <div className="id">
        <h1>
          {p.id}. {p.id}
        </h1>
        <p>{p.title}</p>
      </div>
      <div className="id">
        <Button onClick={() => props.removePost(p)}>Удалить</Button>
      </div>
    </div>
  );
}

export default PostItem;
