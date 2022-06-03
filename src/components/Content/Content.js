import React from "react";
import "./Content.css";

export default function Content({
  title,
  renderAll,
  bookmarkedMovies,
  bookmarkedTVShows,
}) {
  return (
    <div className="content">
      <h2>{title}</h2>
      {bookmarkedMovies === 0 && (
        <p className="bookmark-message">There are no bookmarked movies</p>
      )}
      {bookmarkedTVShows === 0 && (
        <p className="bookmark-message">There are no bookmarked TV Shows</p>
      )}
      <div className="content-items">{renderAll()}</div>
    </div>
  );
}
