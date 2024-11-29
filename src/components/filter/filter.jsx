import classes from "./filter.module.css";
import glass from "../../asserts/img/glass.png";
import { useState } from "react";
import { useText } from "../../context/context";

export const Filter = () => {
  const [text, setText] = useText();

  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className={`${classes.searchBar}`}>
      <input
        type="text"
        className={`${classes.searchInput}`}
        placeholder="Find a character"
        value={text}
        onChange={handleInputChange}
      />

      <span>
        <img className={`${classes.glass}`} src={glass} />
      </span>
    </div>
  );
};
