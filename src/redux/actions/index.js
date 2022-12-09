export const ADD_TO_LIKED_SONGS = "ADD_LIKED_SONGS";
export const REMOVE_FROM_LIKED_SONGS = "REMOVE_FROM_LIKED_SONGS";
export const SET_SEARCHED_SONG = "SET_SEARCHED_SONG";
export const SET_SEARCHED_ARTIST = "SET_SEARCHED_ARTIST";

export const setSearchedSongAction = (data) => {
  return {
    type: SET_SEARCHED_SONG,
    payload: data,
  };
};
