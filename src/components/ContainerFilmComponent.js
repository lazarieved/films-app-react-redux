import React from "react";
import FilmComponent from "./FilmComponent";
import {
  addFilmFavorite,
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
    const {films, searchFilms, addFilmFavorite, favoriteFilms} = this.props;
    console.log(this.props, 'props container');
    return (
      <div>
        <FilmComponent
          films={films}
          searchFilms={searchFilms}
          addFilmFavorite={addFilmFavorite}
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
    }
  } = store;
  return {films, searchFilms, favoriteFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: url => dispatch(showAllFilms(url)),
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
