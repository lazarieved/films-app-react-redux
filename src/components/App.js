import React from "react";
import "antd/dist/antd.css";
import HeaderMenu from "./HeaderMenu";
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
