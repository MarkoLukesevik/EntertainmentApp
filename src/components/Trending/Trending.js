import React from "react";
import "./Trending.css";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import Play from "../Play/Play";

export default function Trending({ item, onBookmarkClick }) {
  console.log(item);

  return (
    <div
      className="trending-item"
      style={{ backgroundImage: `url(${item.thumbnail.trending.large})` }}
    >
      <BookmarkIcon item={item} onBookmarkClick={onBookmarkClick} />

      <Play />
      <div className="trending-item-content">
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
  );
}
