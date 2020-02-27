import React from "react";
import {List, Card, Rate} from 'antd';
import renderHTML from 'react-render-html';

// const data = [
//   {
//     title: 'Title 1',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 2',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 3',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 4',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 5',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 6',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
//   {
//     title: 'Title 7',
//     description: 'asdasdasd asdasd asd asd asd asd'
//   },
// ];

const {Meta} = Card;


class FilmComponent extends React.Component {
  render() {
    console.log(this.props, 'film props');
    const {
      films
    } = this.props;
    let filmItems = films;
    console.log(filmItems, 'filmitems');
    let templateFilmItems = filmItems.map((item, index) => {
        return (
            <Card
              hoverable
              key={index}
              data={item}
              cover={<img alt="example" src={item.url}/>}
            >
              <Meta title={item.name} description={item.summary}/>
            </Card>
      // description={renderHTML(item.summary)}
        )
      }
    );
    let currentCount1 = 0;
    let currentCount2 = 0;
    let currentCount3 = 0;

    function makeCounter() {
      return function() {
        return currentCount1++;
      };
    }
    function makeCounter1() {
      return function() {
        return currentCount2++;
      };
    }
    function makeCounter2() {
      return function() {
        return currentCount3++;
      };
    }

    let counter = makeCounter();
    let counter1 = makeCounter1();
    let counter2 = makeCounter2();


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
        dataSource={filmItems}
        pagination={
          {position: 'bottom',
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
              cover={<img src={item.image.medium}/>}
            >
              <Meta  title={item.name} description={<Rate allowHalf  defaultValue={item.rating.average / 2} disabled />}/>
            </Card>
            {/*{templateFilmItems}*/}
          </List.Item>
        )}
      />
    );
  }
}

export default FilmComponent;
