import React from "react";
import {Layout, notification, Comment, Icon, Tooltip, Avatar, Typography, Form, List, Input} from 'antd';
import Button from "antd/es/button";
import {addFilmFavorite, showAllFilms} from "../actions/apiActions";
import {connect} from "react-redux";
import renderHTML from "react-render-html";
import moment from 'moment';

const { Title } = Typography;
const { TextArea } = Input;
const {Sider, Content } = Layout;

const testItem = {
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

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
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

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: <b>Ananym</b>,
            avatar: 'https://clipartart.com/images/anonomus-clipart-dog.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  handleClick = item => () =>{
    this.props.addFilmFavorite(item);
    openNotificationWithIcon()
  };
  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        <Layout>
            <Sider theme='light' width={"auto"}>
              <div className='sider-film-page'>
                <Title>{testItem.name}</Title>
                <img src={testItem.image.medium}
                     style={{width: '240px', margin: '4% 0 4% 25%'}}
                ></img>
                <Button type="primary"
                        onClick={this.handleClick(testItem)}
                        style={{width: '240px', margin: '4% 0 4% 25%'}}
                >Add to favorite</Button>
              </div>
            </Sider>
            <Content>
              <div className='sider-film-page content-film-page'>
                <p className='p-film-page'><b>Genres: </b>{testItem.genres.join(', ')}</p>
                <p className='p-film-page' ><b>Language: </b>{testItem.language}</p>
                <p className='p-film-page' ><b>Runtime: </b>{testItem.runtime}</p>
                <p className='p-film-page' ><b>Premiered: </b>{testItem.premiered}</p>
                <p className='p-film-page' ><b>Rating: </b>{testItem.rating.average}</p>
                <p className='p-film-page' ><b>Type: </b>{testItem.type}</p>
                <p className='p-film-page' ><b>Origin Link: </b><a>{testItem.url}</a></p>
                <p className='p-film-page' ><b>Description: </b>{renderHTML(testItem.summary)}</p>
              </div>
            </Content>
        </Layout>
        <div>
          <Title style={{marginLeft: '10px'}}>Comments</Title>
          {comments.length > 0 && <CommentList comments={comments} />}
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
  console.log(store, 'store in container');
  const {
    containerReducer: {
      films = [],
      searchFilms = [],
      favoriteFilms = [],
    }
  } = store;
  return {films, searchFilms, favoriteFilms}
};

const mapDispatchToProps = dispatch => {
  return {
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmPage);

