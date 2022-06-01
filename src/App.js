import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layouts/Layout/Layout";
import Home from "./containers/Home/Home";
import Movies from "./containers/Movies/Movies";
import Series from "./containers/Series/Series";
import Bookmarks from "./containers/Bookmarks/Bookmarks";
import data from "./components/Utils/data.json";

import "./App.css";

function App() {
  const [appData, setAppData] = useState(data);

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  function toggleBookmark(item) {
    let copy = [...appData];
    let index = copy.indexOf(item);
    let newItem = copy[index];
    newItem.isBookmarked = !newItem.isBookmarked;
    setAppData(copy);
  }

  const bookmarked = appData.filter((item) => item.isBookmarked);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                data={appData}
                onBookmarkClick={toggleBookmark}
                search={search}
                onInputChange={handleSearch}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Home
                data={appData}
                onBookmarkClick={toggleBookmark}
                search={search}
                onInputChange={handleSearch}
              />
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <Movies
                data={appData}
                onBookmarkClick={toggleBookmark}
                search={search}
                onInputChange={handleSearch}
              />
            }
          ></Route>
          <Route
            path="/series"
            element={
              <Series
                data={appData}
                onBookmarkClick={toggleBookmark}
                search={search}
                onInputChange={handleSearch}
              />
            }
          ></Route>
          <Route
            path="/EntertainmentApp/bookmarks"
            element={
              <Bookmarks
                data={bookmarked}
                onBookmarkClick={toggleBookmark}
                search={search}
                onInputChange={handleSearch}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
