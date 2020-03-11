import React from "react";
import {Layout, Typography,} from 'antd';
import ProfileTable from "./ProfileTable";
import {deleteWatchedFilm, deleteWatchedFilmOff, getFilmId} from "../actions/Actions";
import {connect} from "react-redux";

const {Title} = Typography;
const {Sider, Content} = Layout;

class Profile extends React.Component {
  render() {
    const {getFilmId, deleteWatchedFilm, deleteWatchedFilmOff, watchedFilms} = this.props;
    const returnLogin = JSON.parse(localStorage.getItem('login'));
    const titleStyle1 = {marginLeft: '10px'};
    const titleStyle2 = {marginLeft: '140px'};

    return (
      <div>
        <Layout>
          <Sider theme="light" width={"auto"}>
            <div className="sider-film-page">
              <Title style={titleStyle1}>Hi, {returnLogin.login} !</Title>
              <p className="p-film-page">Был создан: "бла бла бла"</p>
              <p className="p-film-page">Последний вход: "бла бла бла"</p>
              <p className="p-film-page">Дата рождения: "бла бла бла"</p>
              <p className="p-film-page">Любимые жанры: "бла бла бла"</p>
              <p className="p-film-page">Какая то еще инфа: "бла бла бла"</p>
              <p className="p-film-page"> bla bla bla bla</p>
              <p className="p-film-page"> bla bla bla bla</p>
            </div>
          </Sider>
          <Content>
            <div className="sider-film-page content-film-page sider-film-page-prifile">
              <Title style={titleStyle2}>Watched</Title>
              <ProfileTable
                deleteWatchedFilmOff={deleteWatchedFilmOff}
                deleteWatchedFilm={deleteWatchedFilm}
                watchedFilms={watchedFilms}
                getFilmId={getFilmId}
              />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}


const mapStateToProps = store => {
  const {
    containerReducer: {
      films = [],
      filmPageId,
      watchedFilms = [],
    }
  } = store;

  return {films, filmPageId, watchedFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmId: id => dispatch(getFilmId(id)),
    deleteWatchedFilm: item => dispatch(deleteWatchedFilm(item)),
    deleteWatchedFilmOff: item => dispatch(deleteWatchedFilmOff(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
