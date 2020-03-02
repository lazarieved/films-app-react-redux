import React from "react";
import {Table} from 'antd';
import renderHTML from 'react-render-html';
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import {getFilmId} from "../actions/Actions";
import {connect} from "react-redux";

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   }
// };

class TableFilmComponent extends React.Component {
  columns = [
    {
      title: 'Name', dataIndex: 'name', key: 'name',
      render: (text, item) => <Link to='/film-page'><p onClick={this.handleClick(item)}>{text}</p></Link>,
    },
    {
      title: 'Genres', dataIndex: 'genres', key: 'genres',
      render: genres => <p>{genres.join(', ')}</p>
    },
    {title: 'Language', dataIndex: 'language', key: 'language'},
    {title: 'Runtime', dataIndex: 'runtime', key: 'runtime'},
    {title: 'Premiered', dataIndex: 'premiered', key: 'premiered'},
    {
      title: 'Rating', dataIndex: 'rating', key: 'rating',
      render: rating => <p>{rating.average}</p>,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.rating.average - b.rating.average,
    },
    {title: 'Type', dataIndex: 'type', key: 'type'},
    {
      title: 'Origin Link', dataIndex: 'url', key: 'url',
      render: url => <a href={url}>{url}</a>,
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'x',
      render: (record) => <Button
        type="ghost"
        onClick={()=>this.props.deleteFilmFavorite(record.id)}
        style={{color: "red"}}>Delete</Button>,
    },
  ];
  handleClick = item => () => {
    this.props.getFilmId(item.id);
  };

  render() {
    console.log(this.props, 'props in table');
    const {favoriteFilms} = this.props;
    return (
      <div>
        <Table
          // rowSelection={rowSelection}
          tableLayout={'fixed'}
          columns={this.columns}
          expandedRowRender={record => <p style={{margin: 0}}>{renderHTML(record.summary)}</p>}
          dataSource={favoriteFilms}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store, 'store in film-page');
  const {
    containerReducer: {
      films = [],
    }
  } = store;
  return {films}
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmId: id => dispatch(getFilmId(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableFilmComponent);

