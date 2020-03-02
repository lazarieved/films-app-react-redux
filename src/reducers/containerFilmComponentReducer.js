import {
  ADD_FILM_FAVORITE, DELETE_FILM_FAVORITE, FILTER_FILMS, GET_FILM_ID,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
} from "../constants/constants";


const initialState = {
  films: [],
  searchFilms: [],
  favoriteFilms: [],
  filmPageId: 1,
  filterFilms: [],
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
    default:
      return state;
  }
}
