import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

import { data, navDataLinks, navButtons, settings } from "../Components/data";
import { CgProfile } from "react-icons/cg";

const Navbar2 = () => {
  const dispatch = useDispatch();
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  document.addEventListener("mouseup", function (e) {
    var container = document.getElementById("navbar-settings");
    console.log(container);
    console.log(e.target);

    if (!container.contains(e.target)) {
      setSettingsOpen(false);
    }
  });
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
              <button className="nav-bar-button">
                <a href={element.url}>
                  <element.icon className="navbar-icons" />
                </a>
              </button>
            </li>
          );
        })}
        <li>
          <div className="new">
            <button
              onClick={() => {
                setSettingsOpen(!isSettingsOpen);
              }}
              id="navbar-settings"
              className="nav-bar-button"
            >
              <CgProfile className="navbar-icons" />
            </button>
            <ul
              className={
                isSettingsOpen ? "settings" : "settings settings-closed"
              }
            >
              {settings.map((setting) => {
                return (
                  <li>
                    <a href={setting.url}>{setting.name}</a>
                  </li>
                );
              })}
              <li>
                <button
                  id="logout"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <a>Logout</a>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
