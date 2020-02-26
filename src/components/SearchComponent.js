import React from "react";
import {Input} from 'antd';

const {Search} = Input;

class SearchComponent extends React.Component {
  render() {
    return (
      <div style={{'align-self': "flex-end", margin: '20px'}}>
        <Search
          placeholder="Search"
          onSearch={value => console.log(value)}
          style={{width: 500}}
        />
      </div>
    );
  }
}

export default SearchComponent;
