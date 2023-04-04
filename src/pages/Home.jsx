import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/cover">COVER</Link>
        </li>
        <li>
          <Link to="/homepage">HOMEPAGE</Link>
        </li>
        <li>
          <Link to="/homepageone">HOMEPAGEOne</Link>
        </li>
        <li>
          <Link to="/frame48095563">Frame48095563</Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/footer">FOOTER</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;