import React from "react";
import "./BookmarkIcon.css";

export default function BookmarkIcon({ item, onBookmarkClick }) {
  return (
    <div className="bookmark-icon" onClick={() => onBookmarkClick(item)}>
      {item.isBookmarked ? (
        <img src="./assets/icon-bookmark-full.svg" alt=""></img>
      ) : (
        <img src="./assets/icon-bookmark-empty.svg" alt=""></img>
      )}
    </div>
  );
}
