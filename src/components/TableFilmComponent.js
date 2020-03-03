import React from "react";
import renderHTML from 'react-render-html';
import {Link} from "react-router-dom";
import {getFilmId} from "../actions/Actions";
import {connect} from "react-redux";
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   }
// };

class TableFilmComponent extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };


  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon='search'
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  columns = [
    {
      title: 'Name', dataIndex: 'name', key: 'name',
      render: (text, item) => <Link to='/film-page'><p onClick={this.handleClick(item)}>{text}</p></Link>,
      ...this.getColumnSearchProps('name'),
    },
    {
      title: 'Genres', dataIndex: 'genres', key: 'genres',
      render: genres => <p>{genres.join(', ')}</p>,
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
      title: '',
      dataIndex: '',
      key: 'x',
      render: (record) => <Button
        type="ghost"
        onClick={() => {
          this.props.deleteFilmFavorite(record.id);
          this.props.deleteFilmFavoriteIsLogin(record.id)
        }}
        style={{color: "red"}}>Delete</Button>,
    },
  ];
  handleClick = item => () => {
    this.props.getFilmId(item.id);
  };

  render() {
    const {favoriteFilms} = this.props;
    const storageList = JSON.parse(localStorage.getItem('favoriteFilmsIsLogin'));

    return (
      <div>
        <Table
          // rowSelection={rowSelection}
          tableLayout={'fixed'}
          columns={this.columns}
          expandedRowRender={record => <p style={{margin: 0}}>{renderHTML(record.summary)}</p>}
          dataSource={localStorage.getItem('isLogin') ? storageList : favoriteFilms}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
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

