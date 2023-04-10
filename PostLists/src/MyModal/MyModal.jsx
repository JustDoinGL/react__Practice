import React from "react";
import classes from "./MyModal.module.css";

function MyModal({ children, viseble, setViseble }) {
  const rootClasses = [];
  if (viseble) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={[classes.myModal, rootClasses].join(" ")} onClick ={() => setViseble(false)}>
      <div className={classes.myModalContent} onClick ={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export default MyModal;
