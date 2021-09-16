import React from "react";
import { Link } from "react-router-dom";

import SkeletonRecipe from "../Skeletons/SkeletonRecipe";
import Recipe from "./Recipe";

const RecipeGrid = ({ recipes, setCurrentIndex }) => {

  return (
    <div className="recipes">
      {recipes &&
        recipes.map((recipe, index) => (
          <div onClick={() => setCurrentIndex(index)}>
            <Link to="/recipe" style={{textDecoration:'none', color:"black"}}>
              <Recipe
                key={index}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                setCurrentIndex={setCurrentIndex}
              />
            </Link>
          </div>
        ))}

      {!recipes &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonRecipe key={n} />)}

      {[1, 2, 3, 4].map((n) => (
        <div className="fillerDivs" key={n}></div>
      ))}
    </div>
  );
};

export default RecipeGrid;
