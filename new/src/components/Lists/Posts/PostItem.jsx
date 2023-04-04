import React from "react";

function PostItem(props) {
  let p = props.post;

  return (
    <div className="item">
      <div className="name">
        <h1>{p.id}. {p.name}</h1>
        <p>{p.text}</p>
      </div>
      <div className="name">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default PostItem;
