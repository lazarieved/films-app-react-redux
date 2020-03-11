import React from "react";
import {Table, Button} from 'antd';
import {Link} from "react-router-dom";
import renderHTML from "react-render-html";

class ProfileTable extends React.Component {
  columns = [
    {
      title: 'Name', dataIndex: 'name', key: 'name',
      render: (text, item) => <Link to="/film-page"><p onClick={this.handleClick(item)}>{text}</p></Link>,
    },
    {
      title: 'Rating', dataIndex: 'rating', key: 'rating',
      render: rating => <p>{rating.average}</p>,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.rating.average - b.rating.average,
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (record) => <Button
        type="ghost"
        onClick={this.handleClickDel(record)}
        style={{color: 'red', width: '150px', margin: '0 0 0 35px'}}>Delete</Button>,
    },
  ];

  handleClick = item => () => {
    this.props.getFilmId(item.id);
  };

  handleClickDel = record => () => {
    const {deleteWatchedFilm, deleteWatchedFilmOff} = this.props;
    deleteWatchedFilm(record.id);
    deleteWatchedFilmOff(record.id);
  };

  render() {
    const {watchedFilms} = this.props;
    const watchedList = localStorage.getItem('watchedFilms');
    const list = watchedList ? JSON.parse(watchedList) : [];
    const pStyle = {margin: 0};

    return (
      <div>
        <Table
          tableLayout={'fixed'}
          columns={this.columns}
          expandedRowRender={record => <p style={pStyle}>{renderHTML(record.summary)}</p>}
          dataSource={localStorage.getItem('isLogin') ? list : watchedFilms}
        />
      </div>
    );
  }
}

export default ProfileTable;
