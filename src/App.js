import React, { useEffect, useRef, useState } from "react";
import Recipe from "./components/Recipe";
import SkeletonRecipe from "./Skeletons/SkeletonRecipe";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const APP_ID = "12b28fb1";
  const API_KEY = "172fe97b5c8265bc43881237e14ef1fd";

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const [progress, setProgress] = useState(0);
  const progress = useRef(null);

  // let filledArray = Array.from({length:6},()=> ({recipe:{label:"", calories:"", image:"", ingredients:""}}));
  // setrecipes(filledArray);

  useEffect(() => {
    getrecipes();
    progress.current.continuousStart();
  }, [query]);

  const getrecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    progress.current.complete();
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setRecipes(null);
    setQuery(search);
  };

  const popularHandler = (e) => {
    console.log(e.target.innerHTML);
    setSearch(e.target.innerHTML);
    setRecipes(null);
    setQuery(e.target.innerHTML);
  };

  return (
    <div className="App">
      <LoadingBar color="#f11946" ref={progress} height={3} />
      <header>
        <h1>Recipes</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Search for your favorite recipes"
            onChange={updateSearch}
          />
          <button className="search-btn" type="submit">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </form>
        {/* <div className="navigation"> */}
        <ul className="nav-list">
          <li>Home</li>
          <li className="popular">
            Popular
            <ul className="popular-dropdown" onClick={popularHandler}>
              <li>Chicken</li>
              <li>Mutton</li>
              <li>Biryani</li>
              <li>Soup</li>
            </ul>
          </li>
          <li>About</li>
        </ul>
        {/* </div> */}
      </header>

      <div className="recipes">
        {recipes &&
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}

        {!recipes &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonRecipe key={n} />)}

        {[1,2,3,4].map((n) => (
          <div className="fillerDivs" key={n}></div>
        ))}
      </div>
    </div>
  );
};

export default App;
