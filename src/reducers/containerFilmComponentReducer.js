import {
  ADD_FILM_FAVORITE,
  ADD_FILM_FAVORITE_IS_LOGIN,
  DELETE_FILM_FAVORITE,
  DELETE_FILM_FAVORITE_IS_LOGIN, DELETE_WATCHED_FILM, DELETE_WATCHED_FILM_OFF,
  FILTER_FILMS,
  GET_FILM_ID,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  LOGIN,
  LOGOUT, WATCHED_FILM,
} from "../constants/constants";


const initialState = {
  films: [],
  searchFilms: [],
  favoriteFilms: [],
  filmPageId: 1,
  filterFilms: [],
  favoriteFilmsIsLogin: [],
  watchedFilms: [],
};


export function containerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: [...state.films, ...action.payload.data]
      };
    case GET_FILMS_REQUEST:
      console.log(action);
      return {
        ...state,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        searchFilms: action.payload.data.map(item => item.show)
      };
    case GET_SEARCH_REQUEST:
      console.log(action);
      return {
        ...state,
      };
    case ADD_FILM_FAVORITE:
      return {
        ...state,
        favoriteFilms: [...state.favoriteFilms, action.payload]
      };
    case DELETE_FILM_FAVORITE:
      return {
        ...state,
        favoriteFilms: [...state.favoriteFilms].filter(param => action.payload !== param.id)
      };
    case GET_FILM_ID:
      return {
        ...state,
        filmPageId: action.payload
      };
    case FILTER_FILMS:
      return {
        ...state,
        filterFilms: action.payload
      };
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: action.payload
      };
    case ADD_FILM_FAVORITE_IS_LOGIN:
      const storageList = localStorage.getItem('favoriteFilmsIsLogin');
      const list = storageList ? JSON.parse(storageList) : [];
      state.favoriteFilmsIsLogin.forEach(item => {
        if (!list.some(id => {
          return id.id === item.id
        })) {
          list.push(item)
        }
      });
      const fullList = [...list, action.payload];
      localStorage.setItem('favoriteFilmsIsLogin', JSON.stringify(fullList));
      return {
        ...state,
        favoriteFilmsIsLogin: [...state.favoriteFilmsIsLogin, action.payload]
      };
    case DELETE_FILM_FAVORITE_IS_LOGIN:
      const getList = JSON.parse(localStorage.getItem('favoriteFilmsIsLogin'));
      const filterList = getList.filter(param => action.payload !== param.id);
      localStorage.setItem('favoriteFilmsIsLogin', JSON.stringify(filterList));
      return {
        ...state,
        favoriteFilmsIsLogin: [...state.favoriteFilmsIsLogin].filter(param => action.payload !== param.id)
      };
    case WATCHED_FILM:
      const watchedList = localStorage.getItem('watchedFilms');
      const list1 = watchedList ? JSON.parse(watchedList) : [];
      state.watchedFilms.forEach(item => {
        if (!list1.some(id => {
          return id.id === item.id
        })) {
          list1.push(item)
        }
      });
      const fullList1 = [...list1, action.payload];
      localStorage.setItem('watchedFilms', JSON.stringify(fullList1));
      return {
        ...state,
        watchedFilms: [...state.watchedFilms, action.payload]
      };
    case DELETE_WATCHED_FILM:
      const watchedList1 = JSON.parse(localStorage.getItem('watchedFilms'));
      const filterList1 = watchedList1.filter(param => action.payload !== param.id);
      localStorage.setItem('watchedFilms', JSON.stringify(filterList1));
      return {
        ...state,
        watchedFilms: [...state.watchedFilms].filter(param => action.payload !== param.id)
      };
    case DELETE_WATCHED_FILM_OFF:
      return {
        ...state,
        watchedFilms: [...state.watchedFilms].filter(param => action.payload !== param.id)
      };
    default:
      return state;
  }
}
