import React from "react";
import FilmComponent from "./FilmComponent";
import {
  addFilmFavorite,
  addFilmFavoriteIsLogin,
  getFilmId,
  showAllFilms
} from "../actions/Actions";
import {connect} from 'react-redux'

class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    this.props.showAllFilms('/show');
    const login = {
      login: 'ediked',
      password: '123qwe',
      id: '7777777'
    };
    const loginStingify = JSON.stringify(login);
    localStorage.setItem('login', loginStingify);
    // var returnObj = JSON.parse(localStorage.getItem("login"));
    // console.log(returnObj, 'pars')
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
      favoriteFilmsIsLogin = [],
    }
  } = store;
  return {
    films,
    searchFilms,
    favoriteFilms,
    filmPageId,
    filterFilms,
    favoriteFilmsIsLogin
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: url => dispatch(showAllFilms(url)),
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
    addFilmFavoriteIsLogin: item => dispatch(addFilmFavoriteIsLogin(item)),
    getFilmId: id => dispatch(getFilmId(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
