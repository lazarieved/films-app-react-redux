import Api from "../api/Api";
import {
  ADD_FILM_FAVORITE,
  DELETE_FILM_FAVORITE,
  GET_FILMS_FAILED,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_FAILED,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS
} from "../constants/constants";


export const showAllFilms = url => dispatch => {
  const types = [GET_FILMS_REQUEST, GET_FILMS_SUCCESS, GET_FILMS_FAILED];
  return Api.showAllFilms(url, types, dispatch)
};

export const showSearchFilms = searchValue => dispatch => {
  const params = {
    q: searchValue,
  };
  const types = [GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILED];
  return Api.showSearchFilms('/search/shows', types, dispatch, params)
};

export const addFilmFavorite = (item) => {
  return {
    type: ADD_FILM_FAVORITE,
    payload: item,
  }
};

export const deleteFilmFavorite = (item) => {
  return {
    type: DELETE_FILM_FAVORITE,
    payload: item,
  }
};
