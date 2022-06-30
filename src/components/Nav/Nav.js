import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  const navMenu = [
    { name: "./assets/icon-nav-home.svg", value: "home", url: "/home" },
    { name: "./assets/icon-nav-movies.svg", value: "movies", url: "/movies" },
    {
      name: "./assets/icon-nav-tv-series.svg",
      value: "series",
      url: "/series",
    },
    {
      name: "./assets/icon-nav-bookmark.svg",
      value: "bookmarks",
      url: "/bookmarks",
    },
  ];

  return (
    <nav className="nav">
      <img className="logo" src="./assets/logo.svg" alt=""></img>

      <div className="nav-icons">
        {navMenu.map((menuItem) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  filter: isActive
                    ? "invert(39%) sepia(62%) saturate(1303%) hue-rotate(328deg) brightness(98%) contrast(101%)"
                    : "",
                };
              }}
              className="nav-item"
              to={menuItem.url}
              key={menuItem.value}
            >
              <img src={menuItem.name} alt=""></img>
            </NavLink>
          );
        })}
      </div>

      <img className="avatar" src="./assets/jas.jpg" alt=""></img>
    </nav>
  );
}
