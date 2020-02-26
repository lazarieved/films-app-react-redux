import Api from "../api/Api";
export const SHOW_FILM = 'SHOW_FILM';

export function showAllFilms(url) {
  console.log(Api.get('/schedule/full'));
  return {
    type: SHOW_FILM,
    payload: Api.get(url),
  }
}
