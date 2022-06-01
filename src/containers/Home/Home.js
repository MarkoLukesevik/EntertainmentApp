import React from "react";
import Trending from "../../components/Trending/Trending";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import "./Home.css";
import Content from "../../components/Content/Content";

export default function Home({ data, onBookmarkClick, search, onInputChange }) {
  const trending = data.filter((item) => item.isTrending);

  const renderAllTrending = () => {
    return trending.map((item) => {
      return (
        <Trending
          key={item.title}
          item={item}
          onBookmarkClick={onBookmarkClick}
        />
      );
    });
  };

  const recommended = data.filter((item) => !item.isTrending);

  const renderAllRecommended = () => {
    return recommended
      .filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
      .map((item) => {
        return (
          <Item
            key={item.title}
            item={item}
            onBookmarkClick={onBookmarkClick}
          />
        );
      });
  };

  return (
    <>
      <Search
        value={search}
        placeholder="Search for movies or TV series"
        onInputChange={onInputChange}
      />

      <div className="trending">
        <h2>Trending</h2>
        <div className="trending-items">{renderAllTrending()}</div>
      </div>

      <Content title="Recommended for you" renderAll={renderAllRecommended} />
    </>
  );
}
