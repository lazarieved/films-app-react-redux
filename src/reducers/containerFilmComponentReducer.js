import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
} from "../actions/containerFilmComponentActions";


const initialState = {
  films: [
  //   {
  //   id: 1795126,
  //   name: "Terrible, Shocking Things",
  //   url: "http://www.tvmaze.com/episodes/1795126/briarpatch-1x03-terrible-shocking-things",
  //   number: 3,
  //   season: 1,
  //   runtime: 60,
  //   image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/242/606454.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/242/606454.jpg"},
  //   summary: "<p>Jake throws a party. Allegra discovers a secret. A newcomer offers warnings and cocktails.</p>",
  // }
  ]
};



export function containerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          films: [...state.films, ...action.payload.data]
        };
    case GET_FILMS_REQUEST:
      console.log(action)
      return {
        ...state,
      };
    default:
      return state;
  }
}
