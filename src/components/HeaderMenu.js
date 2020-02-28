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
  NavLink,
  useLocation,
  Redirect,
} from 'react-router-dom';

// const routes = [
//   {
//     path: "/",
//     component: HomePage,
//   },
//   {
//     path: "/favorite-page",
//     component: FavoritePage,
//   },
//   {
//     path: "/film-page",
//     component: FilmPage,
//   }
// ];


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
    return (
      <Router>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home"/>
            <Link to='/' style={{display: 'inline'}}>Home</Link>
          </Menu.Item>
          <Menu.Item key="favorite">
            <Icon type="star"/>
            <Link to='/favorite-page' style={{display: 'inline'}}>Favorite Films</Link>
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
