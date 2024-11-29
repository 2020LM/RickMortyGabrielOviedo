import { Fragment } from "react";
import { NavBar } from "./layouts/NavBar/NavBar";
import { Characters } from "./components/characters/Characters";
import { Filter } from "./components/filter/filter";
import classes from "./App.module.css";

export default function App() {
  return (
    <div className={`${classes.basicStyles} ${classes.container}`}>
      <div>
        <nav>
          <NavBar />
        </nav>
      </div>
      <div>
        <main>
          <Filter />
          <Characters />
        </main>
      </div>
    </div>
  );
}
