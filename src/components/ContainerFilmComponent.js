import React from "react";
import FilmComponent from "./FilmComponent";
import {
  showAllFilms
} from "../actions/containerFilmComponentActions";
import {containerReducer} from "../reducers/containerFilmComponentReducer";
import {connect} from 'react-redux'
import Api from "../api/Api";


class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    this.props.showAllFilms('/show');

  }

  render() {
    const {films} = this.props;
    console.log(this.props, 'props container');
    return (
      <div>
        <FilmComponent films={films}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store, 'store in container');
  const {
    containerReducer: {
      films = [],
    }
  } = store;
  return {films}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: url => dispatch(showAllFilms(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
