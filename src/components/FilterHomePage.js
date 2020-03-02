import {Select} from 'antd';
import React from "react";
import {Typography} from 'antd';
import {addFilmFavorite, filterFilms, showAllFilms} from "../actions/Actions";
import {connect} from "react-redux";
import Button from "antd/es/button";

const {Title} = Typography;

const {Option} = Select;

const ganres = [
  <Option key={"Drama"}>Drama</Option>,
  <Option key={"Science-Fiction"}>Science-Fiction</Option>,
  <Option key={"Thriller"}>Thriller</Option>,
  <Option key={"Action"}>Action</Option>,
  <Option key={"Crime"}>Crime</Option>,
  <Option key={"Horror"}>Horror</Option>,
  <Option key={"Romance"}>Romance</Option>,
  <Option key={"Adventure"}>Adventure</Option>,
  <Option key={"Espionage"}>Espionage</Option>,
  <Option key={"Music"}>Music</Option>,
  <Option key={"Mystery"}>Mystery</Option>,
  <Option key={"Supernatural"}>Supernatural</Option>,
  <Option key={"Fantasy"}>Fantasy</Option>,
  <Option key={"Family"}>Family</Option>,
  <Option key={"Anime"}>Anime</Option>,
  <Option key={"Comedy"}>Comedy</Option>,
];
const countries = [
  <Option key={"United States"}>United States</Option>,
  <Option key={"Canada"}>Canada</Option>,
  <Option key={"Japan"}>Japan</Option>,
  <Option key={"United Kingdom"}>United Kingdom</Option>,
];
const dates = [
  <Option key={"1999"}>1999</Option>,
  <Option key={"2000"}>2000</Option>,
  <Option key={"2001"}>2001</Option>,
  <Option key={"2002"}>2002</Option>,
  <Option key={"2003"}>2003</Option>,
  <Option key={"2004"}>2004</Option>,
  <Option key={"2005"}>2005</Option>,
  <Option key={"2006"}>2006</Option>,
  <Option key={"2007"}>2007</Option>,
  <Option key={"2008"}>2008</Option>,
  <Option key={"2009"}>2009</Option>,
  <Option key={"2010"}>2010</Option>,
  <Option key={"2011"}>2011</Option>,
  <Option key={"2012"}>2012</Option>,
  <Option key={"2013"}>2013</Option>,
  <Option key={"2014"}>2014</Option>,
  <Option key={"2015"}>2015</Option>,
  <Option key={"2016"}>2016</Option>,
  <Option key={"2017"}>2017</Option>,
  <Option key={"2018"}>2018</Option>,
  <Option key={"2019"}>2019</Option>,
  <Option key={"2020"}>2020</Option>,
];
const companies = [
  <Option key={"CBS"}>CBS</Option>,
  <Option key={"CTV Sci-Fi Channel"}>CTV Sci-Fi Channel</Option>,
  <Option key={"The CW"}>The CW</Option>,
  <Option key={"HBO"}>HBO</Option>,
  <Option key={"Showtime"}>Showtime</Option>,
  <Option key={"FOX"}>FOX</Option>,
  <Option key={"ABC"}>ABC</Option>,
  <Option key={"NBC"}>NBC</Option>,
  <Option key={"Showcase"}>Showcase</Option>,
  <Option key={"FX"}>FX</Option>,
  <Option key={"TNT"}>TNT</Option>,
  <Option key={"Fuji TV"}>Fuji TV</Option>,
  <Option key={"History"}>History</Option>,
  <Option key={"Syfy"}>Syfy</Option>,
  <Option key={"AMC"}>AMC</Option>,
  <Option key={"Syfy"}>Syfy</Option>,
  <Option key={"BBC America"}>BBC America</Option>,
  <Option key={"NTV"}>NTV</Option>,
  <Option key={"Starz"}>Starz</Option>,
  <Option key={"Lifetime"}>Lifetime</Option>,
  <Option key={"Cinemax"}>Cinemax</Option>,
  <Option key={"Channel 4"}>Channel 4</Option>,
  <Option key={"A&E"}>A&E</Option>,
  <Option key={"USA Network"}>USA Network</Option>,
  <Option key={"VH1"}>VH1</Option>,
  <Option key={"El Rey Network"}>El Rey Network</Option>,
];


class FilterHomePage extends React.Component {
  state = {
    size: 'default',
  };
  handleChangeCounrty = (value) => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.premiered && item.network && item.network.country != null);
    let filteredFilms = correctFilms.filter(item => item.network.country.name === value);
    filterFilms(filteredFilms);
  };
  handleChangeCompany = (value) => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.premiered && item.network && item.network.country != null);
    let filteredFilms = correctFilms.filter(item => item.network.name === value);
    filterFilms(filteredFilms);
  };
  handleChangeDates = (value) => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.premiered && item.network && item.network.country != null);
    let filteredFilms = correctFilms.filter(item => item.premiered.slice(0, 4) === value);
    filterFilms(filteredFilms);
  };
  handleChangeGenres = (value) => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.premiered && item.network && item.network.country != null);
    let filteredFilms = correctFilms.filter(item => {
      return item.genres.some(genr => {
        return value.some(pr => pr == genr);
      })
    });
    filterFilms(filteredFilms);
  };
///////////////////////////// другой вариант фильтра по жанру
  // handleChangeGenres = (value) => {
  // const { films, filterFilms } = this.props;
  //   let correctFilms = films.filter(item => item.premiered && item.network && item.network.country != null);
  //   let filteredFilms = correctFilms.slice();
  //    value.forEach((item => {
  //      filteredFilms = filteredFilms.filter(sr => {
  //        return sr.genres.some(s => s === item);
  //      })
  //    }));
  //   filterFilms(filteredFilms);
  //   console.log(value);
  //   console.log(correctFilms, 'correctFilms filter');
  //   console.log(filteredFilms, 'use filter');
  // };
  handleClickTop = () => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.rating != null);
    correctFilms.sort((a, b) => {
      if (a.rating.average > b.rating.average) {
        return -1;
      } else if (a.rating.average < b.rating.average) {
        return 1;
      } else {
        return 0;
      }
    });
    filterFilms(correctFilms);
  };
  handleClickDown = () => {
    const { films, filterFilms } = this.props;
    let correctFilms = films.filter(item => item.rating != null);
    correctFilms.sort((a, b) => {
      if (a.rating.average > b.rating.average) {
        return 1;
      } else if (a.rating.average < b.rating.average) {
        return -1;
      } else {
        return 0;
      }
    });
    filterFilms(correctFilms);
  };


  render() {
    const {size} = this.state;
    const mainSelectStyle = {
      width: '200px',
      paddingBottom: '15px'
    };
    const subSelectStyle = {
      width: '100%', paddingBottom: '15px'
    };
    const buttonStyle = {
      width: '100%',
      marginBottom: '15px'
    };
    return (
      <div>
        <Title level={3}>Filters</Title>
        <Select
          mode="multiple"
          size={size}
          placeholder="Select genres"
          onChange={this.handleChangeGenres}
          style={mainSelectStyle}
          allowClear
        >
          {ganres}
        </Select>
        <br/>
        <Select
          size={size}
          placeholder="Select date"
          onChange={this.handleChangeDates}
          style={subSelectStyle}
          allowClear
        >
          {dates}
        </Select>
        <br/>
        <Select
          size={size}
          placeholder="Select Countries"
          onChange={this.handleChangeCounrty}
          style={subSelectStyle}
          allowClear
        >
          {countries}
        </Select>
        <Select
          size={size}
          placeholder="Select Company"
          onChange={this.handleChangeCompany}
          style={subSelectStyle}
          allowClear
        >
          {companies}
        </Select>
        <br/>
        <Button type="primary"
                onClick={this.handleClickTop}
                style={buttonStyle}
        >Show top rating</Button>
        <br/>
        <Button type="primary"
                onClick={this.handleClickDown}
                style={buttonStyle}
        >Show down rating</Button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    containerReducer: {
      films = [],
      filmPageId,
    }
  } = store;
  return {films, filmPageId}
};

const mapDispatchToProps = dispatch => {
  return {
    addFilmFavorite: item => dispatch(addFilmFavorite(item)),
    showAllFilms: url => dispatch(showAllFilms(url)),
    filterFilms: films => dispatch(filterFilms(films)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterHomePage);
