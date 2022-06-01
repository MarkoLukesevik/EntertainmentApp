import React from "react";
import Content from "../../components/Content/Content";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import "./Series.css";

export default function Series({
  data,
  onBookmarkClick,
  search,
  onInputChange,
}) {
  const tvShows = data.filter((item) => item.category === "TV Series");
  const renderAllTvShows = () => {
    return tvShows
      .filter((tvShow) => {
        return tvShow.title.toLowerCase().includes(search.toLowerCase());
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
    <div className="tvShows">
      <Search
        value={search}
        placeholder="Search for TV series"
        onInputChange={onInputChange}
      />

      <Content title="TV Series" renderAll={renderAllTvShows} />
    </div>
  );
}
