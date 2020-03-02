import React from "react";
import FilmComponent from "./FilmComponent";
import {
  addFilmFavorite,
  getFilmId,
  showAllFilms
} from "../actions/Actions";
import {connect} from 'react-redux'

class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    this.props.showAllFilms('/show');
  }

  render() {
    const {
      films,
      searchFilms,
      addFilmFavorite,
      getFilmId,
      filterFilms,
    } = this.props;
    return (
      <div>
        <FilmComponent
          films={films}
          searchFilms={searchFilms}
          filterFilms={filterFilms}
          addFilmFavorite={addFilmFavorite}
          getFilmId={getFilmId}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store, 'store in container');
  const {
    containerReducer: {
      films = [],
      searchFilms = [],
      favoriteFilms = [],
      filmPageId,
      filterFilms = [],
    }
  } = store;
  return {films, searchFilms, favoriteFilms, filmPageId, filterFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: url => dispatch(showAllFilms(url)),
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
    getFilmId: id => dispatch(getFilmId(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
