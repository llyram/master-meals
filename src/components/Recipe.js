import React from "react";
// import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <img className="images skeleton" src={image} alt="" />
      <h2 className="title">{title}</h2>
      {/* <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul> */}
      <p> Calories - {calories}</p>
    </div>
  );
};

export default Recipe;
