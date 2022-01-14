import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({getSearch, search, updateSearch, popularHandler}) => {
  return (
    <header>
      <h1 className="logo">Master Meals</h1>
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
      <ul className="nav-list">
        <Link to="/recipes" style={{textDecoration: 'none', color: 'black', height:"100%"}}><li>Home</li></Link>
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
    </header>
  );
};

export default Header;
