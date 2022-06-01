import React from "react";
import Content from "../../components/Content/Content";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import "./Movies.css";

export default function Movies({
  data,
  onBookmarkClick,
  search,
  onInputChange,
}) {
  const movies = data.filter((item) => item.category === "Movie");
  const renderAllMovies = () => {
    return movies
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

  return (
    <div className="movies">
      <Search
        value={search}
        placeholder="Search for movies"
        onInputChange={onInputChange}
      />

      <Content title="Movies" renderAll={renderAllMovies} />
    </div>
  );
}
