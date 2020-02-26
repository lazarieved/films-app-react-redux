import React from "react";
import { List, Avatar, Icon } from 'antd';
import FilmComponent from "./FilmComponent";

class ContainerFilmComponent extends React.Component{
  render() {
    return (
      <div>
        <FilmComponent />
      </div>
    );
  }
}

export default ContainerFilmComponent;
