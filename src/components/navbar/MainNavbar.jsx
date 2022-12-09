import { Col, Container, Row } from "react-bootstrap";
import "./mainNavbar.css";

const MainNavbar = () => {
  return (
    <>
      <div className="custom-navbar">
        <div className="navbar-logo">
          <Container>
            {/* <Link href="#"> */}
            <img
              src="spotify-logo.png"
              className="navbar-logo"
              alt="Containerspotify logo"
            />
            {/* </Link> */}
          </Container>
        </div>
        <div className="navbar-top">
          <Container>
            <Row>
              <Col>
                <div className="primary-options navbar-nav d-flex flex-column">
                  <div className="home">
                    <a
                      href="./homePage.html"
                      className="active-link d-flex align-items-center"
                    >
                      <div className="icon-div">
                        <i className="bi bi-house-door-fill home-icon"></i>
                      </div>
                      <span className="link-text">Home</span>
                    </a>
                  </div>
                  <div className="search">
                    {/* <a href="#" className="d-flex align-items-center"> */}
                    <div className="icon-div">
                      <i className="bi bi-search search-icon"></i>
                    </div>
                    <span className="link-text">Search</span>
                    {/* </a> */}
                  </div>
                  <div className="your-library">
                    {/* <a href="#" className="d-flex align-items-center"> */}
                    <div className="icon-div">
                      <i className="bi bi-collection library-icon"></i>
                    </div>
                    <span className="link-text">Your Library</span>
                    {/* </a> */}
                  </div>
                </div>
              </Col>
              <div className="col-12">
                <div className="secondary-options">
                  <div className="create-playlist">
                    {/* <a href="#" className="d-flex align-items-center"> */}
                    <div className="icon-div create-playlist-icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-plus-lg"></i>
                    </div>
                    <span>Create Playlist</span>
                    {/* </a> */}
                  </div>
                  <div className="liked-songs">
                    {/* <a href="#" className="d-flex align-items-center"> */}
                    <div className="icon-div liked-songs-icon">
                      <i className="bi bi-heart-fill"></i>
                    </div>
                    <span>Liked Songs</span>
                    {/* </a> */}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr className="divider" />
              </div>
            </Row>
          </Container>
        </div>
        <div className="navbar-bottom">
          <Container>
            <ul className="navbar-playlist list-group">
              <li className="navbar-playlist-item">Funky Heavy Bluesy</li>
              <li className="navbar-playlist-item">Your Top Songs 2020</li>
              <li className="navbar-playlist-item">
                In Love With You - Erykah lorem ipsum
              </li>
              <li className="navbar-playlist-item">This Is Rod Stewart</li>
              <li className="navbar-playlist-item">FRANCHISE ft. Young</li>
              <li className="navbar-playlist-item">Your Top Songs 2019</li>
              <li className="navbar-playlist-item">Palleggio</li>
              <li className="navbar-playlist-item">This Is Joe Bonamassa</li>
              <li className="navbar-playlist-item">Jun19</li>
              <li className="navbar-playlist-item collaborative-playlist-item">
                Jack 30th Party 2 Lorem, ipsum
                <span className="collaborative-icon">
                  <i className="bi bi-people"></i>
                </span>
              </li>
              <li className="navbar-playlist-item collaborative-playlist-item">
                Jack 30th Party
                <span className="collaborative-icon">
                  <i className="bi bi-people"></i>
                </span>
              </li>
              <li className="navbar-playlist-item">This Is Opeth</li>
              <li className="navbar-playlist-item">This Is Rod Stewart</li>
              <li className="navbar-playlist-item">
                FRANCHISE ft. Young Thugsjkfh
              </li>
              <li className="navbar-playlist-item">Your Top Songs 2021</li>
              <li className="navbar-playlist-item">Oct16</li>
              <li className="navbar-playlist-item">Your Top Songs 2018</li>
            </ul>
          </Container>
        </div>
        <div className="install-app">
          <div className="container">
            {/* <a href="#" className="d-flex align-items-center"> */}
            <div className="icon-div">
              <i className="bi bi-arrow-down-circle install-icon"></i>
            </div>
            <span>Install App</span>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
