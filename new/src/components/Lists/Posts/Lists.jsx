import PostItem from "./PostItem";

const Lists = ({info}) => {
  if (!info.postSortedAnd.length) {
    return (
      <h1 style={{ textAlign: "center", fontWeight: "22px" }}>
        Посты не найдены!
      </h1>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "44px" }}>{info.title}</h1>
      {info.postSortedAnd.map((el) => (
        <PostItem post={el} removePost={info.removePost} />
      ))}
    </>
  );
};

export default Lists;
