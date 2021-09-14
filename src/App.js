import React, { useEffect, useRef, useState } from "react";
import Recipe from "./components/Recipe";
import SkeletonRecipe from "./Skeletons/SkeletonRecipe";
import "./App.css";
import LoadingBar from "react-top-loading-bar";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import RecipeGrid from "./components/RecipesGrid";
import RecipePage from "./components/RecipePage";

const App = () => {
  const APP_ID = "12b28fb1";
  const API_KEY = "172fe97b5c8265bc43881237e14ef1fd";

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [currentIndex, setCurrentIndex] = useState(null);

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
    <Router>
      <div className="App">
        <LoadingBar color="#f11946" ref={progress} height={3} />
        <Header
          getSearch={getSearch}
          search={search}
          updateSearch={updateSearch}
          popularHandler={popularHandler}
        />
        <Route path="/recipes">
          <RecipeGrid recipes={recipes} setCurrentIndex={setCurrentIndex} />
        </Route>
        <Route path="/recipe">
          {currentIndex && <RecipePage recipes={recipes} currentIndex={currentIndex} />}
        </Route>
      </div>
    </Router>
  );
};

export default App;
