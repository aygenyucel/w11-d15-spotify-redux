import "./home.css";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import MainNavbar from "./../navbar/MainNavbar";
import Footer from "./../footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home-page">
        <MainNavbar />
        <div className="main" id="right-container">
          {/* <Header /> */}

          {/* <!-- main section --> */}
          <div className="good-morning-section mb-4">
            <div className="container-fluid">
              <div className="position-relative mb-3">
                <div className="heading-primary">Good morning</div>
                <div className="header-mobile d-flex align-items-center">
                  <div className="header-mobile-icons d-flex align-items-center">
                    <a
                      href="/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div">
                          {/* <i className="bi bi-bell"></i> */}
                          {/* <AiFillBell /> */}
                        </div>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div">
                          <i className="bi bi-clock-history"></i>
                        </div>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div">
                          <i className="bi bi-gear"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="good-morning-section-row row d-flex justify-content-center">
                {/* <!--TODO: When we are fetching, we need to create algorithm for displaying "6" album card here -->
              <!-- <div className="col-12 col-md-6 col-lg-4">
                <a className="album-link card-link" href="./albumPage.html">
                  <div className="album-card-horizontal d-flex align-items-center">
                    <div>
                      <img
                        className="album-img album-card-horizontal-img"
                        src="https://upload.wikimedia.org/wikipedia/tr/thumb/a/a7/Random_Access_Memories.jpg/250px-Random_Access_Memories.jpg"
                        alt="album image"
                      />
                    </div>
                    <div className="album-name album-card-horizontal-name">
                      Random Access Memories
                    </div>
                  </div>
                </a>
              </div> --> */}
              </div>
            </div>
          </div>
          <div className="recently-played-section mb-4">
            <div className="container-fluid">
              <div className="heading mb-3">Recently played</div>
              <div className="row recently-played-section-row d-flex">
                {/* <!--TODO: When we are fetching, we need to create algorithm for displaying "7" song cards here -->

              <!-- <div className="col">
                <div className="song-card-vertical">
                  <div className="position-relative">
                    <img
                      src="https://i.scdn.co/image/ab67616d0000b2736976009675621c80cafa1ff5"
                      alt=""
                      className="song-card-vertical-img song-img"
                    />
                    <div>
                      <i className="bi bi-play-circle-fill play-button-on-card"></i>
                    </div>
                  </div>
                  <div className="mt-3 w-100">
                    <div className="song-name song-card-vertical-song-name">
                      Master of Puppet
                    </div>
                    <a className="artist-link card-link" href="./artistPage.html">
                      <div className="artist-name song-card-vertical-artist-name">
                        Metallica
                      </div>
                    </a>
                  </div>
                </div>
              </div> --> */}
              </div>
            </div>
          </div>
          <div className="shows-to-try-section">
            <div className="container-fluid">
              <div className="heading">Shows to try</div>
              <div className="heading-content mb-4">
                Artists we think you'll get hooked on.
              </div>
              <div className="shows-to-try-section-row row d-flex">
                {/* <!--TODO: When we are fetching, we need to create algorithm for displaying "7" artist cards here --> */}

                {/* <!-- <div className="col">
                <a className="artist-link card-link" href="./artistPage.html">
                  <div className="artist-card-vertical">
                    <div>
                      <img
                        src="https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c"
                        alt=""
                        className="artist-card-vertical-img song-img"
                      />
                    </div>
                    <div className="mt-3 w-100">
                      <div className="artist-name artist-card-vertical-artist-name">
                        Muse
                      </div>
                      <div className="artist-card-badge">Artist</div>
                    </div>
                  </div>
                </a>
              </div> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
