import React from "react";
import SearchComponent from "./SearchComponent";
import TableFilmComponent from "./TableFilmComponent";

class FavoritePage extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
      }}>
        <SearchComponent/>
        <TableFilmComponent/>
      </div>
    );
  }
}

export default FavoritePage;
