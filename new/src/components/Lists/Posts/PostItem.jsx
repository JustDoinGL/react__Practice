import React from "react";
import Button from "../../../UI/Button/Button";
import classes from './PostItem.module.css'
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
  let p = props.post;
  const navigate = useNavigate();
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
        <Button onClick={() => navigate(`/post/${p.id}`)}>Читать больше</Button>
      </div>
    </div>
  );
}

export default PostItem;
