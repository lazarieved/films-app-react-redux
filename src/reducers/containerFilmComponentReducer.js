import {
  ADD_FILM_FAVORITE,
  ADD_FILM_FAVORITE_IS_LOGIN,
  DELETE_FILM_FAVORITE,
  DELETE_FILM_FAVORITE_IS_LOGIN,
  FILTER_FILMS,
  GET_FILM_ID,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  LOGIN,
  LOGOUT,
} from "../constants/constants";


const initialState = {
  films: [],
  searchFilms: [],
  favoriteFilms: [],
  filmPageId: 1,
  filterFilms: [],
  favoriteFilmsIsLogin: [],
};


export function containerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_SUCCESS:
      console.log(action.payload, 'act.pay getfilm-success');
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
      console.log(action.payload, 'act.pay searchfilm-success');
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
      console.log(action.payload, 'act.pay favoriteFilms');
      return {
        ...state,
        favoriteFilms: [...state.favoriteFilms, action.payload]
      };
    case DELETE_FILM_FAVORITE:
      console.log(action.payload, 'act.pay favoriteFilms');
      return {
        ...state,
        favoriteFilms: [...state.favoriteFilms].filter(param => action.payload !== param.id)
      };
    case GET_FILM_ID:
      console.log(action.payload, 'act.pay film-ID');
      return {
        ...state,
        filmPageId: action.payload
      };
    case FILTER_FILMS:
      console.log(action.payload, 'act.pay filter-films');
      return {
        ...state,
        filterFilms: action.payload
      };
    case LOGIN:
      console.log(action.payload, 'act.pay login');
      return {
        ...state,
        isLogin: action.payload
      };
    case LOGOUT:
      console.log(action.payload, 'act.pay logout');
      return {
        ...state,
        isLogin: action.payload
      };
    case ADD_FILM_FAVORITE_IS_LOGIN:
      console.log(action.payload, 'act.pay ADD_FILM_FAVORITE_IS_LOGIN');
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
      console.log(action.payload, 'act.pay DELETE_FILM_FAVORITE_IS_LOGIN');
      const getList = JSON.parse(localStorage.getItem('favoriteFilmsIsLogin'));
      const filterList = getList.filter(param => action.payload !== param.id);
      localStorage.setItem('favoriteFilmsIsLogin', JSON.stringify(filterList));
      return {
        ...state,
        favoriteFilmsIsLogin: [...state.favoriteFilmsIsLogin].filter(param => action.payload !== param.id)
      };
    default:
      return state;
  }
}
