import axios from 'axios';

class Api {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  showAllFilms = (url, types, dispatch) => handle(types, url, dispatch);
  showSearchFilms = (url, types, dispatch, params) => handle(types, url, dispatch, params);

}

export default new Api();

const handle = (types, url, dispatch, params = {}) => {
  let config = {
    params
  };
  dispatch({
    type: typeByStatus(types, 'REQUEST'),
  });
  axios.get(`http://api.tvmaze.com${url}`, config)
    .then(response => {
      dispatch({
        type: typeByStatus(types, 'SUCCESS'),
        payload: response
      });
    })
    .catch(function (error) {
      dispatch({
        type: typeByStatus(types, 'FAILED'),
        payload: error
      })
    });
};

const typeByStatus = (types, status) => types.find(item => item.includes(status));
