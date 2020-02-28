import {
  ADD_FILM_FAVORITE, DELETE_FILM_FAVORITE,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
} from "../constants/constants";


const initialState = {
  films: [],
  searchFilms: [],
  favoriteFilms: [],
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
    default:
      return state;
  }
}
