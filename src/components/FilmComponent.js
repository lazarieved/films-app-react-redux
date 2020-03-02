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
    this.props.addFilmFavorite(item);
    openNotificationWithIcon();
  };
  handleGetId = item => () => {
    this.props.getFilmId(item.id);
  };

  render() {
    console.log(this.props, 'film props');
    const {
      films,
      searchFilms,
      getFilmId,
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
              onClick={this.handleGetId(item)}
              hoverable
              style={{width: 220}}
              data={item}
              cover={<Link to='/film-page'>
                <img style={{width: "100%", overflow: 'hidden', height: '306px'}}
                     src={item.image
                       ? item.image.medium
                       : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Oleksa_Slisarenko_%281928%29.jpg/218px-Oleksa_Slisarenko_%281928%29.jpg'}
                />
              </Link>}
              actions={[
                <Button type="primary" onClick={this.handleClick(item)}>Add to favorite</Button>,
              ]}
            >
              <Link to='/film-page'>
                <Meta title={item.name}
                      description={<Rate style={{marginLeft: '10%'}}
                                         allowHalf
                                         defaultValue={item.rating.average / 2}
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
