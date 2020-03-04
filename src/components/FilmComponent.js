import React from "react";
import {List, Card, Rate, notification,} from 'antd';
import {Link,} from 'react-router-dom';
import Button from "antd/es/button";

const {Meta} = Card;

const openNotificationWithIcon = type => {
  notification.success({
    message: 'Successfully',
    description:
      'The movie has been added to your favorites list.',
  });
};

class FilmComponent extends React.Component {
  handleClick = item => () => {
    const {addFilmFavorite, addFilmFavoriteIsLogin, favoriteFilmsIsLogin} = this.props;
    if (localStorage.getItem('isLogin')) {
      addFilmFavoriteIsLogin(item);

    } else {
      addFilmFavorite(item);
    }
    openNotificationWithIcon();
  };
  handleClickWatched = item => () => {
    const {watchedFilm,} = this.props;
    watchedFilm(item);
    openNotificationWithIcon();
  };
  handleGetId = item => () => {
    this.props.getFilmId(item.id);
  };

  render() {

    const {
      films,
      searchFilms,
      filterFilms,
    } = this.props;
    let filmItems = () => {
      if (searchFilms.length) {
        return searchFilms;
      } else if (filterFilms.length) {
        return filterFilms;
      } else {
        return films;
      }
    };
    const imgStyle = {
      width: "100%",
      overflow: 'hidden',
      height: '306px'
    };
    const demoImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Oleksa_Slisarenko_%281928%29.jpg/218px-Oleksa_Slisarenko_%281928%29.jpg';
    const listItemStyle = {
      padding: "20px"
    };
    const buttonStyle = {
      width: '105px',
      padding: '0'
    };
    const rateStyle = {marginLeft: '10%'};

    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={filmItems()}
        pagination={
          {
            position: 'bottom',
            pageSize: 12,
          }
        }
        renderItem={item => (
          <List.Item style={listItemStyle}>
            <Card
              onClick={this.handleGetId(item)}
              hoverable
              style={{width: 240}}
              data={item}
              cover={<Link to='/film-page'>
                <img style={imgStyle}
                     src={item.image
                       ? item.image.medium
                       : demoImg}
                />
              </Link>}
              actions={[
                <Button
                  type="primary"
                  style={buttonStyle}
                  onClick={this.handleClick(item)}>Add to favorite</Button>,
                localStorage.getItem('isLogin')
                  ? <Button
                    type="primary"
                    style={buttonStyle}
                    onClick={this.handleClickWatched(item)}>Add to watched</Button>
                  : <Button
                    disabled
                    type="primary"
                    style={buttonStyle}>Add to watched</Button>,
              ]}
            >
              <Link to='/film-page'>
                <Meta title={item.name}
                      description={
                        <Rate
                          style={rateStyle}
                          allowHalf
                          defaultValue={item.rating ? (item.rating.average / 2) : 1}
                          disabled
                        />}
                /></Link>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default FilmComponent;
