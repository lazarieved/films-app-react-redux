import  React from "react";
import { Layout } from 'antd';
import FilterHomePage from "./FilterHomePage";
import SearchComponent from './SearchComponent'
import ContainerFilmComponent from "./ContainerFilmComponent";

const { Sider, Content } = Layout;

class HomePage extends React.Component{
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
            <FilterHomePage />
          </Sider>
          <Layout>
            <Content>
              <div style={{
                display: 'flex',
                'flex-direction': 'column',
                // justifyContent: "center",
                alignItems: "center"
              }}>
                <SearchComponent />
                <ContainerFilmComponent />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
