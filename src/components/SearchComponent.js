import React from "react";
import {Input} from 'antd';
import {showSearchFilms} from "../actions/apiActions";
import {connect} from "react-redux";
import HomePage from "./HomePage";

const {Search} = Input;

class SearchComponent extends React.Component {
  addValueSearch = () => {

};
  render() {
    return (
      <div style={{ alignSelf: "flex-end", margin: '20px'}}>
        <Search
          placeholder="Search"
          onSearch={value => this.props.showSearchFilms(value)}
          style={{width: 500}}
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
      searchFilms=[],
    }
  } = store;
  return {films, searchFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    showSearchFilms: url => dispatch(showSearchFilms(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchComponent);


