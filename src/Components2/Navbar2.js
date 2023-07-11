import React from "react";
import { data, navDataLinks, navButtons } from "../Components/data";

const Navbar2 = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
        ></img>
        <h1>{data.companyName}</h1>
      </div>

      <ul className="navbar-links-container">
        {navDataLinks.map((element) => {
          return (
            <li>
              <a href={element.url}>{element.name}</a>
            </li>
          );
        })}
      </ul>

      <ul className="navbar-buttons-container">
        {navButtons.map((element) => {
          return (
            <li>
              <a href={element.url}>{element.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar2;
