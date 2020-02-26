import React from "react";
import FilmComponent from "./FilmComponent";
import {
  showAllFilms
} from "../actions/containerFilmComponentActions";
import {containerReducer} from "../reducers/containerFilmComponentReducer";
import {connect} from 'react-redux'


class ContainerFilmComponent extends React.Component {
  componentDidMount() {
    this.props.showAllFilms('/schedule/full')
  }
  render() {
    const {films} = this.props;
    return (
      <div>
        <FilmComponent films={films}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  const {
    containerReducer: {
      films,
    }
  } = store;
  return {films};
};

const mapDispatchToProps = dispatch => {
  return {
    showAllFilms: item => dispatch(showAllFilms(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFilmComponent);
