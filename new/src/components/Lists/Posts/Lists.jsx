import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Lists = ({ info }) => {
  if (!info.sortedAddSearchedPosts.length) {
    return (
      <TransitionGroup>
        <CSSTransition key={info.sortedAddSearchedPosts.id} timeout={500} classNames="post">
          <h1 style={{ textAlign: "center", fontWeight: "22px" }}>
            Посты не найдены!
          </h1>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "44px" }}>{info.title}</h1>
      <TransitionGroup>
        {info.sortedAddSearchedPosts.map((el) => (
          <CSSTransition key={el.id} timeout={500} classNames="post">
            <PostItem post={el} removePost={info.removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Lists;
