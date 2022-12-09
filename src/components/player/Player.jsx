import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./player.css";

const Player = () => {
  const searchedSong = useSelector((state) => state.search.searchedSong);
  const searchedArtist = useSelector((state) => state.search.searchedArtist);
  const searchedImg = useSelector((state) => state.search.searchedImg);
  return (
    <>
      <div className="footer">
        <div id="footer-container container">
          <div className="row"></div>
          <div
            id="footer"
            className="col-12 d-flex justify-content-between align-items-center sticky"
          >
            <Container fluid>
              <Row
                id="music-player-container"
                className="d-flex justify-content-between align-items-center"
              >
                <Col
                  xs={3}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div id="image-music-player" className="mr-2">
                    <img
                      src={
                        searchedArtist !== ""
                          ? searchedImg
                          : "https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    id="artist-and-song-footer"
                    className="mr-4 d-sm-none d-md-block"
                  >
                    <div className="d-flex justify-content-start player-song">
                      {searchedSong !== "" ? searchedSong : "The Division Bell"}
                    </div>
                    <div className="d-flex justify-content-start player-artist">
                      {searchedArtist !== "" ? searchedArtist : "Pink Floydd"}
                    </div>
                  </div>
                  <div id="heart-footer" className="d-none d-md-block">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                </Col>
                <Col
                  xs={6}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <div
                      id="controls-above-audio-player"
                      className="d-flex justify-content-between align-items-center music-player-font-size"
                    >
                      <div className="ml-auto ml-sm-0 mx-2 d-none d-sm-block">
                        <i className="bi bi-shuffle"></i>
                      </div>
                      <div className="mx-2 d-none d-sm-block">
                        <i className="bi bi-skip-start-fill"></i>
                      </div>
                      <div className="ml-auto ml-sm-0 mx-2 playPauseButton playpause-track d-flex d-sm-block">
                        <i className="bi bi-music-player d-block d-sm-none mr-2 iconJustOnXsScreen"></i>
                        <i
                          id="play-icon"
                          className="bi bi-play-circle-fill d-none d-sm-block"
                        ></i>
                        <i className="bi bi-play-fill d-block d-sm-none"></i>
                      </div>
                      <div className="mx-2 d-none d-sm-block">
                        <i className="bi bi-skip-end-fill"></i>
                      </div>
                      <div className="mx-2 d-none d-sm-block">
                        <i className="bi bi-repeat"></i>
                      </div>
                    </div>
                    <div
                      id="audio-player-container"
                      className="slider_container d-flex"
                    >
                      <audio
                        id="audio-tag"
                        src="https://cdns-preview-6.dzcdn.net/stream/c-60db3f7f3d6a419da5c582d9b7b53506-3.mp3"
                        preload="metadata"
                        loop=""
                      ></audio>
                      <span
                        id="current-time"
                        className="time d-none d-sm-block"
                      >
                        0:00
                      </span>
                      <input
                        type="range"
                        id="seek-slider"
                        className="d-none d-sm-block"
                        max="100"
                        value="0"
                      />
                      <span id="duration" className="time d-none d-sm-block">
                        0:00
                      </span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={3}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div
                    id="controls-right-side-of-footer"
                    className="d-flex justify-content-end music-player-font-size"
                  >
                    <div className="mx-2 d-none d-sm-none d-lg-block">
                      <i className="bi bi-border-width"></i>
                    </div>
                    <div className="mx-2 d-none d-sm-none d-md-block">
                      <i className="bi bi-person-badge"></i>
                    </div>
                    <div className="ml-2 d-sm-flex d-none d-sm-block">
                      <div id="mute-icon" className="d-none d-sm-block">
                        <i className="bi bi-volume-down"></i>
                      </div>
                      {/* <!-- <output id="volume-output">100</output> --> */}
                      <div className="d-flex align-items-center">
                        <input
                          type="range"
                          id="volume-slider"
                          max="100"
                          value="100"
                          className="d-none d-sm-block"
                        />
                      </div>
                    </div>
                    <div className="mr-2 d-none d-sm-none d-md-block">
                      <i className="bi bi-arrows-angle-expand"></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* <!-- footer for xs screens --> */}
      <div className="footer-mobile">
        <div className="container">
          <div className="footer-mobile-player d-flex align-items-center">
            <div className=" d-flex align-items-center">
              <div className="mobile-player-img-div">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0"
                  alt=""
                />
              </div>
              <div className="mobile-player-song-div d-flex flex-column">
                <div player-song className="mobile-player-song">
                  The Division Bell
                </div>
                <div className="mobile-player-artist">Pink Floyd</div>
              </div>
              <div className=" player-artistmobile-player-icons d-flex align-items-center">
                <div className="mr-3">
                  <i className="bi bi-pc-display"></i>
                </div>
                <div>
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-mobile-navbar d-flex align-items-center">
          <div className="container">
            <div className="row mobile-navbar-icons d-flex align-items-center">
              <div className="col-4">
                <a
                  href="./homePage.html"
                  className="active-link d-flex align-items-center justify-content-center"
                >
                  <div className="home d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div">
                      <i className="bi bi-house-door-fill home-icon"></i>
                    </div>
                    <div className="link-text">Home</div>
                  </div>
                </a>
              </div>
              <div className="col-4">
                <a
                  href="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div">
                      <i className="bi bi-search search-icon"></i>
                    </div>
                    <div className="link-text">Search</div>
                  </div>
                </a>
              </div>
              <div className="col-4">
                <a
                  href="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div">
                      <i className="bi bi-collection library-icon"></i>
                    </div>
                    <div className="link-text">Your Library</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
