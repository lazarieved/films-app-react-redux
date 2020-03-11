import React from "react";
import {Form, Input, Button} from 'antd';
import {loginStorage} from "../actions/Actions";
import {connect} from "react-redux";

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

class Login extends React.Component {
  state = {
    login: '',
    password: '',
  };

  handleCheckLogin = event => {
    this.setState({
      login: event.target.value
    });
  };

  handleCheckPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLoginClick = () => {
    const {login, password} = this.state;
    const {loginStorage, history} = this.props;
    const returnLogin = JSON.parse(localStorage.getItem('login'));
    if (returnLogin.login == login && returnLogin.password == password) {
      loginStorage();
      localStorage.setItem('isLogin', 'true');
      alert('Welcome:)');
      history.push('/')
    } else {
      alert('Login or password - incorrect')
    }
  };

  render() {
    const divStyle = {
      width: '500px',
      margin: '150px auto 50px auto'
    };

    return (
      <div style={divStyle}>
        <Form
          {...layout}
          name="basic"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input placeholder="Username" onChange={this.handleCheckLogin} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password placeholder="Password" onChange={this.handleCheckPassword} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={this.handleLoginClick}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
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
    loginStorage: () => dispatch(loginStorage()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
