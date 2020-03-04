import React from "react";
import {Menu, Icon} from "antd";
import "antd/dist/antd.css";
import HomePage from "./HomePage";
import FavoritePage from "./FavoritePage";
import FilmPage from "./FilmPage";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {logoutStorage} from "../actions/Actions";
import {connect} from "react-redux";
import Profile from "./Profile";


class HeaderMenu extends React.Component {
  state = {
    current: 'mail',
  };
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  handleLogout = () => {
    const {logoutStorage} = this.props;
    logoutStorage();
    localStorage.removeItem('isLogin')
  };

  render() {
    const {current} = this.state;
    const linkStyle = {
      display: 'inline'
    };
    const menuItemStyle81 = {margin: '0 0 0 81.6%',};
    const menuItemStyle75 = {margin: '0 0 0 75.6%',};
    const returnLogin = JSON.parse(localStorage.getItem("login"));
    let buttonTemplateLoginLogout;
    if (!localStorage.getItem('isLogin')) {
      buttonTemplateLoginLogout = () => {
        return (
          <Menu.Item key="login" style={menuItemStyle81}>
            <Icon type="login"/>
            <Link to='/login' style={linkStyle}>Login</Link>
          </Menu.Item>
        )
      }
    } else {
      buttonTemplateLoginLogout = () => {
        return (
          <Menu.Item key="logout">
            <Icon type="logout"/>
            <Link to='/login' style={linkStyle} onClick={this.handleLogout}>Logout</Link>
          </Menu.Item>
        )
      }
    }

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
          {localStorage.getItem('isLogin')
            ? <Menu.Item key="profile" style={menuItemStyle75}>
              <Icon type="user"/>
              <Link to='/profile' style={linkStyle}>{returnLogin.login}</Link>
            </Menu.Item>
            : null}
          {buttonTemplateLoginLogout()}
        </Menu>
        <Switch>
          <Route path='/favorite-page' component={FavoritePage}/>
          <Route path='/' exact component={HomePage}/>
          <Route path='/film-page' component={FilmPage}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  const {
    containerReducer: {
      isLogin = false,
    }
  } = store;
  return {isLogin}
};

const mapDispatchToProps = dispatch => {
  return {
    logoutStorage: () => dispatch(logoutStorage()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenu);

