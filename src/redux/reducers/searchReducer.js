import {
  SET_SEARCHED_ARTIST,
  SET_SEARCHED_IMG,
  SET_SEARCHED_SONG,
} from "./../actions/index";

const initialState = {
  searchedSong: "",
  searchedArtist: "",
  searchedImg: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_ARTIST:
      return {
        ...state,
        searchedArtist: action.payload,
      };
    case SET_SEARCHED_SONG:
      return {
        ...state,
        searchedSong: action.payload,
      };
    case SET_SEARCHED_IMG:
      return {
        ...state,
        searchedImg: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
