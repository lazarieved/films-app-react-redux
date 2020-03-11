import React from "react";
import {Layout} from 'antd';
import FilterHomePage from "./FilterHomePage";
import SearchComponent from './SearchComponent'
import ContainerFilmComponent from "./ContainerFilmComponent";

const {Sider, Content} = Layout;

class HomePage extends React.Component {

  render() {
    const siderStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };
    const conentStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

    return (
      <div>
        <Layout>
          <Sider
            width={250}
            theme="light"
            style={siderStyle}
          >
            <FilterHomePage />
          </Sider>
          <Layout>
            <Content>
              <div style={conentStyle}>
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
