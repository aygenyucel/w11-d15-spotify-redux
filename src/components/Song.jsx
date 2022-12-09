import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import {
  addToLikedSongsAction,
  removeFromLikedSongsAction,
  setSearchedArtistAction,
  setSearchedSongAction,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Song = ({ song }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column align-items-start">
        <div
          onClick={() => {
            dispatch(
              setSearchedSongAction(song.title),
              dispatch(setSearchedArtistAction(song.artist.name))
            );
          }}
          style={{ cursor: "pointer" }}
        >
          <span>{song.artist.name}</span> - {song.title}
        </div>
        <div>
          <small>{song.album.title}</small>
        </div>
        <hr />
      </div>
      <div>
        {isClicked ? (
          <FcLike
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(removeFromLikedSongsAction(song));
              setIsClicked(!isClicked);
            }}
          />
        ) : (
          <FcLikePlaceholder
            onClick={() => {
              dispatch(addToLikedSongsAction(song));
              setIsClicked(!isClicked);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Song;
