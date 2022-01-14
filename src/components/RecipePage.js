import React from "react";

const RecipePage = ({ recipes, currentIndex }) => {
  return (
    <div className="recipe-page">
      <img src={recipes[currentIndex].recipe.image} alt="" />
      <div className="recipe-descriptoin">
        <h1>{recipes[currentIndex].recipe.label}</h1>
        <ul>
        {recipes[currentIndex].recipe.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients.text}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
