import React from "react";
import {Input} from 'antd';
import {showSearchFilms} from "../actions/Actions";
import {connect} from "react-redux";

const {Search} = Input;

class SearchComponent extends React.Component {
  render() {
    const divStyle = {
      alignSelf: "flex-end",
      margin: '20px'
    };
    const {showSearchFilms} = this.props;
    return (
      <div style={divStyle}>
        <Search
          placeholder="Search"
          onSearch={value => showSearchFilms(value)}
          style={{width: 500}}
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


