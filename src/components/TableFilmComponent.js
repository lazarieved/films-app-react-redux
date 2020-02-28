import React from "react";
import {Table} from 'antd';
import renderHTML from 'react-render-html';
import Button from "antd/es/button";
import {Link} from "react-router-dom";



const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

class TableFilmComponent extends React.Component {
  columns = [
    {
      title: 'Name', dataIndex: 'name', key: 'name',
      render: text => <Link to='/film-page'><p>{text}</p></Link>,
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
      render: rating => <p>{rating.average}</p>
    },
    {title: 'Type', dataIndex: 'type', key: 'type'},
    {
      title: 'Origin Link', dataIndex: 'url', key: 'url',
      render: url => <a>{url}</a>,
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

  render() {
    console.log(this.props, 'props in table');
    const {favoriteFilms} = this.props;
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          tableLayout={'fixed'}
          columns={this.columns}
          expandedRowRender={record => <p style={{margin: 0}}>{renderHTML(record.summary)}</p>}
          dataSource={favoriteFilms}
        />
      </div>
    );
  }
}

export default TableFilmComponent;
