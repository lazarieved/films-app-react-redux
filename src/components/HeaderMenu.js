import React from "react";
import {Menu, Icon} from "antd";
import "antd/dist/antd.css";

class HeaderMenu extends React.Component{
  state = {
    current: 'mail',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="favorite">
          <Icon type="star" />
          Favorite Films
        </Menu.Item>
        <Menu.Item key="login" style={{margin: '0 0 0 74.5%',}}>
          <Icon type="login" />
          Login
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;
