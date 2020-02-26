import React from "react";
import {Alert, Button, DatePicker, message, version} from "antd";
import "antd/dist/antd.css";
import HeaderMenu from "./HeaderMenu";
import HomePage from "./HomePage";
import FavoritePage from "./FavoritePage";
import FilmPage from './FilmPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
  Redirect,
} from 'react-router-dom';
import Api from "../api/Api";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderMenu api={Api}/>
      </div>
    );
  }
}

export default App;
