import React from "react";
import {Layout, notification, Comment, Typography, Form, List, Input} from 'antd';
import Button from "antd/es/button";
import {addFilmFavorite, addFilmFavoriteIsLogin, showAllFilms} from "../actions/Actions";
import {connect} from "react-redux";
import renderHTML from "react-render-html";
import moment from 'moment';

const {Title} = Typography;
const {TextArea} = Input;
const {Sider, Content} = Layout;

const demoItem = {
  "id": 1,
  "url": "http://www.tvmaze.com/shows/1/under-the-dome",
  "name": "Under the Dome",
  "type": "Scripted",
  "language": "English",
  "genres": [
    "Drama",
    "Science-Fiction",
    "Thriller"
  ],
  "status": "Ended",
  "runtime": 60,
  "premiered": "2013-06-24",
  "officialSite": "http://www.cbs.com/shows/under-the-dome/",
  "schedule": {
    "time": "22:00",
    "days": [
      "Thursday"
    ]
  },
  "rating": {
    "average": 6.5
  },
  "weight": 88,
  "network": {
    "id": 2,
    "name": "CBS",
    "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    }
  },
  "webChannel": null,
  "externals": {
    "tvrage": 25988,
    "thetvdb": 264492,
    "imdb": "tt1553656"
  },
  "image": {
    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
  "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  "updated": 1573667713,
  "_links": {
    "self": {
      "href": "http://api.tvmaze.com/shows/1"
    },
    "previousepisode": {
      "href": "http://api.tvmaze.com/episodes/185054"
    }
  }
};

const openNotificationWithIcon = type => {
  notification.success({
    message: 'Successfully',
    description:
      'The movie has been added to your favorites list.',
  });
};

const CommentList = ({comments}) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({onChange, onSubmit, submitting, value}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value}/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class FilmPage extends React.Component {

  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });


    const {filmPageId} = this.props;
    const storageComments = localStorage.getItem('commentsList');
    const list = storageComments ? JSON.parse(storageComments) : [];
    const login = JSON.parse(localStorage.getItem('login'));
    const moveList = [
      {
        author: localStorage.getItem('isLogin') ? login.login : 'Anonymous',
        avatar: 'https://clipartart.com/images/anonomus-clipart-dog.png',
        content: this.state.value,
        uniq: filmPageId,
        datetime: moment().format("MMM Do YY"),
      },
      ...list,
    ];
    this.setState({
      submitting: false,
      value: '',
    });
    localStorage.setItem('commentsList', JSON.stringify(moveList));
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  handleClick = item => () => {
    const {addFilmFavorite, addFilmFavoriteIsLogin} = this.props;
    addFilmFavorite(item);
    addFilmFavoriteIsLogin(item);
    openNotificationWithIcon()
  };

  render() {
    const storageComments = localStorage.getItem('commentsList')
      ? JSON.parse(localStorage.getItem('commentsList'))
      : [];
    const {submitting, value} = this.state;
    const {films, filmPageId} = this.props;
    const filterComments = storageComments.filter(item => item.uniq == filmPageId);
    const filterFilms = films.filter(item => item.id == filmPageId);
    const filmItem = filterFilms[0] ? filterFilms[0] : demoItem;
    const demoImg = 'https://images.wallpaperscraft.ru/image/fon_nebo_tochki_svet_83482_300x168.jpg';
    const imgStyle = {
      width: '240px',
      margin: '4% 0 4% 25%'
    };
    const titleStyle = {marginLeft: '10px'};

    return (
      <div>
        <Layout>
          <Sider theme='light' width={"auto"}>
            <div className='sider-film-page'>
              <Title>{filmItem.name}</Title>
              {filmItem.image
                ? <img
                  alt='text'
                  src={filmItem.image.medium}
                  style={imgStyle}
                />
                : <img alt='text' src={demoImg}
                       style={imgStyle}
                />}
              <Button type="primary"
                      onClick={this.handleClick(filmItem)}
                      style={imgStyle}
              >Add to favorite</Button>
            </div>
          </Sider>
          <Content>
            <div className='sider-film-page content-film-page'>
              <p className='p-film-page'><b>Genres: </b>{filmItem.genres ? filmItem.genres.join(', ') : 'unknown'}</p>
              <p className='p-film-page'><b>Language: </b>{filmItem.language}</p>
              <p className='p-film-page'><b>Runtime: </b>{filmItem.runtime}</p>
              <p className='p-film-page'><b>Premiered: </b>{filmItem.premiered}</p>
              <p className='p-film-page'><b>Company: </b>{filmItem.network ? filmItem.network.name : filmItem.network}
              </p>
              <p className='p-film-page'><b>Rating: </b>{filmItem.rating ? filmItem.rating.average : 'unknown'}</p>
              <p className='p-film-page'><b>Type: </b>{filmItem.type}</p>
              <p className='p-film-page'><b>Origin Link: </b><a href={filmItem.url}>{filmItem.url}</a></p>
              <p className='p-film-page'><b>Description: </b>{renderHTML(filmItem.summary)}</p>
            </div>
          </Content>
        </Layout>
        <div>
          <Title style={titleStyle}>Comments</Title>
          {filterComments.length > 0 && <CommentList comments={filterComments}/>}
          <Comment
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    containerReducer: {
      films = [],
      filmPageId,
    }
  } = store;
  return {films, filmPageId}
};

const mapDispatchToProps = dispatch => {
  return {
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
    showAllFilms: url => dispatch(showAllFilms(url)),
    addFilmFavoriteIsLogin: item => dispatch(addFilmFavoriteIsLogin(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmPage);

