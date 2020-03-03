import React from "react";
import TableFilmComponent from "./TableFilmComponent";
import {deleteFilmFavorite, deleteFilmFavoriteIsLogin} from "../actions/Actions";
import {connect} from "react-redux";

class FavoritePage extends React.Component {
  render() {
    const {deleteFilmFavorite, favoriteFilms, deleteFilmFavoriteIsLogin} = this.props;
    const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center"
    };
    return (
      <div style={divStyle}>
        <TableFilmComponent
          favoriteFilms={favoriteFilms}
          deleteFilmFavorite={deleteFilmFavorite}
          deleteFilmFavoriteIsLogin={deleteFilmFavoriteIsLogin}
        />
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
    deleteFilmFavoriteIsLogin: item => dispatch(deleteFilmFavoriteIsLogin(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritePage);
