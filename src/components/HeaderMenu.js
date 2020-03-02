import React from "react";
import {Menu, Icon} from "antd";
import "antd/dist/antd.css";
import HomePage from "./HomePage";
import FavoritePage from "./FavoritePage";
import FilmPage from "./FilmPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


class HeaderMenu extends React.Component {
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
    const {current} = this.state;
    const linkStyle ={
      display: 'inline'
    };
    return (
      <Router>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          defaultSelectedKeys={['home']}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home"/>
            <Link to='/' style={linkStyle}>Home</Link>
          </Menu.Item>
          <Menu.Item key="favorite">
            <Icon type="star"/>
            <Link to='/favorite-page' style={linkStyle}>Favorite Films</Link>
          </Menu.Item>
          <Menu.Item key="login" style={{margin: '0 0 0 74.5%',}}>
            <Icon type="login"/>
            Login
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path='/favorite-page' component={FavoritePage}/>
          <Route path='/' exact component={HomePage}/>
          <Route path='/film-page' component={FilmPage}/>
        </Switch>
      </Router>
    );
  }
}

export default HeaderMenu;
