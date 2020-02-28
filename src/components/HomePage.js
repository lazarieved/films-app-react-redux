import React from "react";
import {Layout} from 'antd';
import FilterHomePage from "./FilterHomePage";
import SearchComponent from './SearchComponent'
import ContainerFilmComponent from "./ContainerFilmComponent";
import {showAllFilms, showSearchFilms} from "../actions/apiActions";
import {connect} from "react-redux";

const {Sider, Content} = Layout;

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Sider
            width={250}
            theme='light'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FilterHomePage/>
          </Sider>
          <Layout>
            <Content>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center"
              }}>
                <SearchComponent />
                <ContainerFilmComponent searchData={1} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
