import { Fragment, useState, useEffect } from "react";
import classes from "./Character.module.css";
import splash from "../../asserts/img/splash_2.png";
import { useText } from "../../context/context";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  // const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [text, setText] = useText();

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => {
        if (response.status == 404) {
          console.table("Resource not found");
        }

        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.table(error);
      });
  }, []);

  useEffect(() => {}, [text]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <Fragment>
      <section>
        <div className={`${classes.characterComponent}`}>
          <div className={`${classes.subtitle}`}>
            <div className={`${classes.listOfCharacters}`}>
              <span>List of Characters</span>
            </div>
            <div className={`${classes.padding}`}></div>
          </div>
          {characters == undefined || characters.length == 0 ? (
            <div className={`${classes.noResults}`}>No results</div>
          ) : (
            <div className={`${classes.characters}`}>
              {filteredCharacters.slice(0, 10).map((character) => {
                return (
                  <div key={character.id}>
                    <div className={`${classes.character}`}>
                      <span>
                        <img
                          src={character.image}
                          alt={character.name}
                          className={`${classes.picture}`}
                        />
                        <div className={`${classes.characterData}`}>
                          <div>{character.name}</div>
                          <div>{character.status}</div>
                          <div>{character.location.name}</div>
                        </div>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <br />
      </section>
    </Fragment>
  );
};
