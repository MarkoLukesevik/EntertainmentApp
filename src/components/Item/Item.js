import React from "react";
import "./Item.css";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import Play from "../Play/Play";

export default function Item({ item, onBookmarkClick }) {
  return (
    <div className="item">
      <BookmarkIcon
        isBookmarked={item.isBookmarked}
        item={item}
        onBookmarkClick={onBookmarkClick}
      />
      <img className="item-img" src={item.thumbnail.regular.large} alt=""></img>
      <Play />
      <div className="item-content">
        <div className="item-text">
          <p>{item.year}</p>
          <span></span>

          {item.category === "Movie" ? (
            <img
              className="category-icon"
              src="./assets/icon-category-movie.svg"
              alt=""
            ></img>
          ) : (
            <img
              className="category-icon"
              src="./assets/icon-category-tv.svg"
              alt=""
            ></img>
          )}

          <p>{item.category}</p>
          <span></span>
          <p>{item.rating}</p>
        </div>

        <h1>{item.title}</h1>
      </div>
    </div>
  );
}
