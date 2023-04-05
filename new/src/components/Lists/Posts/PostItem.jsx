import React from "react";
import Button from "../../../UI/Button/Button";

function PostItem(props) {
  let p = props.post;

  return (
    <div className="item">
      <div className="name">
        <h1>
          {p.id}. {p.name}
        </h1>
        <p>{p.text}</p>
      </div>
      <div className="name">
        <Button onClick={() => props.removePost(p)}>Удалить</Button>
      </div>
    </div>
  );
}

export default PostItem;
