import React from "react";
import SearchComponent from "./SearchComponent";
import TableFilmComponent from "./TableFilmComponent";
import {addFilmFavorite, deleteFilmFavorite, showAllFilms} from "../actions/apiActions";
import {connect} from "react-redux";

class FavoritePage extends React.Component {
  render() {
    const {deleteFilmFavorite, favoriteFilms} = this.props
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
      }}>
        {/*<SearchComponent/>*/}
        <TableFilmComponent favoriteFilms={favoriteFilms} deleteFilmFavorite={deleteFilmFavorite}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store, 'store in favoritePAGE');
  const {
    containerReducer: {
      favoriteFilms = [],
    }
  } = store;
  return {favoriteFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFilmFavorite: item => dispatch(deleteFilmFavorite(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritePage);
