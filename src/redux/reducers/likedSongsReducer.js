import { ADD_TO_LIKED_SONGS } from "./../actions/index";

const initialState = {
  likedSongs: [],
};

const likedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED_SONGS:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default likedSongReducer;
