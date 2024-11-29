import { Fragment } from "react";
import classes from "./NavBar.module.css";
import title from "../../asserts/img/title.png";

export const NavBar = () => {
  return (
    <Fragment>
      <span className={`${classes.span}`}>
        <img className={`${classes.title}`} src={title} />
      </span>
    </Fragment>
  );
};
