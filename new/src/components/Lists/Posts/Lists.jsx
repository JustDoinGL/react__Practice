import PostItem from "./PostItem";

const Lists = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.post1.map(el => <PostItem post = {el} />)}
    </>
  );
};

export default Lists;
