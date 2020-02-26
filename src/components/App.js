import React from "react";
import {Alert, Button, DatePicker, message, version} from "antd";
import "antd/dist/antd.css";
import HeaderMenu from "./HeaderMenu";
import HomePage from "./HomePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <HomePage />
      </div>
    );
  }
}
export default App;
