import React from "react";
import FilmComponent from "./FilmComponent";
import {
  addFilmFavorite,
  addFilmFavoriteIsLogin,
  getFilmId,
  showAllFilms, watchedFilm
} from "../actions/Actions";
import {connect} from 'react-redux'

class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    const {films, showAllFilms} = this.props;
    const login = {
      login: 'ediked',
      password: '123qwe',
      id: '7777777'
    };

    if (!films.length) {
      showAllFilms('/show');
    }

    const loginStingify = JSON.stringify(login);
    localStorage.setItem('login', loginStingify);
  }

  render() {
    const {
      films,
      searchFilms,
      addFilmFavorite,
      getFilmId,
      addFilmFavoriteIsLogin,
      filterFilms,
      favoriteFilmsIsLogin,
      watchedFilms,
      watchedFilm,
    } = this.props;
    return (
      <div>
        <FilmComponent
          films={films}
          searchFilms={searchFilms}
          filterFilms={filterFilms}
          favoriteFilmsIsLogin={favoriteFilmsIsLogin}
          addFilmFavorite={addFilmFavorite}
          getFilmId={getFilmId}
          addFilmFavoriteIsLogin={addFilmFavoriteIsLogin}
          watchedFilm={watchedFilm}
          watchedFilms={watchedFilms}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    containerReducer: {
      films = [],
      searchFilms = [],
      favoriteFilms = [],
      filmPageId,
      filterFilms = [],
      favoriteFilmsIsLogin = [],
      watchedFilms = [],
    }
  } = store;
  return {
    films,
    searchFilms,
    favoriteFilms,
    filmPageId,
    filterFilms,
    favoriteFilmsIsLogin,
    watchedFilms,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: url => dispatch(showAllFilms(url)),
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
    addFilmFavoriteIsLogin: item => dispatch(addFilmFavoriteIsLogin(item)),
    getFilmId: id => dispatch(getFilmId(id)),
    watchedFilm: item => dispatch(watchedFilm(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
