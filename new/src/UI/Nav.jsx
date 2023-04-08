import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div>
        <Link className={classes.navItem} to={`/pages`}>
          Pages
        </Link>
        <Link className={classes.navItem} to={`/info`}>
          {" "}
          Info{" "}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
