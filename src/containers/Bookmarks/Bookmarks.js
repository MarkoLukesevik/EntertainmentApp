import React from "react";
import Content from "../../components/Content/Content";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import "./Bookmarks.css";

export default function Bookmarks({
  data,
  search,
  onBookmarkClick,
  onInputChange,
}) {
  const bookmarkedMovies = data.filter((item) => item.category === "Movie");

  const renderAllBookmarkedMovies = () => {
    return bookmarkedMovies
      .filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      })
      .map((movie) => {
        return (
          <Item
            key={movie.title}
            item={movie}
            onBookmarkClick={onBookmarkClick}
          />
        );
      });
  };

  const bookmarkedTVShows = data.filter(
    (item) => item.category === "TV Series"
  );

  const renderAllBookmarkedTvShows = () => {
    return bookmarkedTVShows
      .filter((tvShow) => {
        return tvShow.title.toLowerCase().includes(search);
      })
      .map((tvShow) => {
        return (
          <Item
            key={tvShow.title}
            item={tvShow}
            onBookmarkClick={onBookmarkClick}
          />
        );
      });
  };

  return (
    <div className="bookmarked">
      <Search
        value={search}
        placeholder="Search for bookmarked shows"
        onInputChange={onInputChange}
      />

      <Content
        title="Bookmarked Movies"
        renderAll={renderAllBookmarkedMovies}
      />
      <Content
        title="Bokmarked TV Series"
        renderAll={renderAllBookmarkedTvShows}
      />
    </div>
  );
}
