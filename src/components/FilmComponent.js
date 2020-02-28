import React from "react";
import {List, Card, Rate, notification, } from 'antd';
import renderHTML from 'react-render-html';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
  Redirect,
} from 'react-router-dom';
import FavoritePage from "./FavoritePage";
import FilmPage from "./FilmPage";
import Icon from "antd/es/icon";
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
  handleClick = item => () =>{
    this.props.addFilmFavorite(item);
    openNotificationWithIcon()
  };

  render() {
    console.log(this.props, 'film props');
    const {
      films, searchFilms
    } = this.props;
    let filmItems = () => {
      if (searchFilms.length) {
        return searchFilms;
      } else {
        return films;
      }
    };
    setTimeout(() => console.log(this.props, 'film props2'), 2000);

    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 3,
        }}
        dataSource={filmItems()}
        pagination={
          {
            position: 'bottom',
            pageSize: 12,
          }
        }
        renderItem={item => (
          <List.Item style={{
            padding: "20px"
          }}>
            <Card
              hoverable
              style={{width: 220}}
              data={item}
              cover={<Link to='/film-page'><img style={{width: "100%"}} src={item.image.medium}/></Link>}
              actions={[
                <Button type="primary" onClick={this.handleClick(item)}>Add to favorite</Button>,
              ]}
              // onClick={this.props.addFilmFavorite(item)}

            >
              <Link to='/film-page'>
                <Meta title={item.name}
                      description={<Rate style={{marginLeft: '10%'}} allowHalf defaultValue={item.rating.average / 2}
                      disabled/>}
              /></Link>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default FilmComponent;
