import React from "react";
import Button from "../../../UI/Button/Button";
import classes from './PostItem.module.css'

function PostItem(props) {
  let p = props.post;

  return (
    <div className={classes.item}>
      <div className={classes.id}>
        <h1>
          {p.id}. {p.id}
        </h1>
        <p>{p.title}</p>
      </div>
      <div className={classes.id}>
        <Button onClick={() => props.removePost(p)}>Удалить</Button>
      </div>
    </div>
  );
}

export default PostItem;
