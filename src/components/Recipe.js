import React from "react";
// import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <img className="images" src={image} alt="" />
      <h2 className="title" >{title}</h2>
      <p> Calories - {calories}</p>
    </div>
  );
};

export default Recipe;
