import React from "react";
import FilmComponent from "./FilmComponent";
import {
  addFilmFavorite, getFilmId,
  showAllFilms
} from "../actions/apiActions";
import {containerReducer} from "../reducers/containerFilmComponentReducer";
import {connect} from 'react-redux'
import Api from "../api/Api";


class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    this.props.showAllFilms('/show');
  }

  render() {
    const {films, searchFilms, addFilmFavorite, favoriteFilms, getFilmId} = this.props;
    console.log(this.props, 'props container');
    return (
      <div>
        <FilmComponent
          films={films}
          searchFilms={searchFilms}
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
    }
  } = store;
  return {films, searchFilms, favoriteFilms, filmPageId}
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
