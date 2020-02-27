import Api from "../api/Api";
export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILED = 'GET_FILMS_FAILED';

export const showAllFilms = url => dispatch => {
  const types = [GET_FILMS_REQUEST, GET_FILMS_SUCCESS, GET_FILMS_FAILED];
  return Api.showAllFilms(url, types, dispatch)
};
