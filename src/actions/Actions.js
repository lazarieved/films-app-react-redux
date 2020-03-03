import Api from "../api/Api";
import {
  ADD_FILM_FAVORITE,
  ADD_FILM_FAVORITE_IS_LOGIN,
  DELETE_FILM_FAVORITE,
  DELETE_FILM_FAVORITE_IS_LOGIN,
  FILTER_FILMS,
  GET_FILM_ID,
  GET_FILMS_FAILED,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_FAILED,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  LOGIN,
  LOGOUT,
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

export const getFilmId = (id) => {
  return {
    type: GET_FILM_ID,
    payload: id,
  }
};
export const filterFilms = (films) => {
  return {
    type: FILTER_FILMS,
    payload: films,
  }
};
export const loginStorage = () => {
  return {
    type: LOGIN,
    payload: true,
  }
};
export const logoutStorage = () => {
  return {
    type: LOGOUT,
    payload: false,
  }
};
export const addFilmFavoriteIsLogin = (item) => {
  return {
    type: ADD_FILM_FAVORITE_IS_LOGIN,
    payload: item,
  }
};
export const deleteFilmFavoriteIsLogin = (item) => {
  return {
    type: DELETE_FILM_FAVORITE_IS_LOGIN,
    payload: item,
  }
};
