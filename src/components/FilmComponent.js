import React from "react";
import {List, Card} from 'antd';

const data = [
  {
    title: 'Title 1',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 2',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 3',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 4',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 5',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 6',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
  {
    title: 'Title 7',
    description: 'asdasdasd asdasd asd asd asd asd'
  },
];


class FilmComponent extends React.Component {

  render() {
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
        dataSource={data}
        pagination={
          {position:'bottom'}
        }
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              description={item.description}
            >Card content</Card>
          </List.Item>
        )}
      />
    );
  }
}

export default FilmComponent;
