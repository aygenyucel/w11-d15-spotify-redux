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

export const setSearchedArtistAction = (data) => {
  return {
    type: SET_SEARCHED_ARTIST,
    payload: data,
  };
};

export const addToLikedSongsAction = (data) => {
  return {
    type: ADD_TO_LIKED_SONGS,
    payload: data,
  };
};

export const removeFromLikedSongsAction = (data) => {
  return {
    type: REMOVE_FROM_LIKED_SONGS,
    payload: data,
  };
};
