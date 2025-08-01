import projectAppMovie from "../assets/images/project-app-movie.png";
import projectOrphangeAdmin from "../assets/images/project-orphanage-admin.png";
import projectOrphangeWebsite from "../assets/images/project-orphanage-website.png";
import projectWebMovie from "../assets/images/project-web-movie.png";
import projectNewsMap from "../assets/images/project-news-map.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="image-wrapper">
            <a
              href="https://news-map.nbtrien.site"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectNewsMap}
                className="zoom project-img"
                alt="News Map Website"
              />
            </a>
          </div>
          <a
            href="https://news-map.nbtrien.site"
            target="_blank"
            rel="noreferrer"
          >
            <h2>News Map Website</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://news-map.nbtrien.site"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="btn"
              href="https://github.com/nbtrien-news-map"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            A web application that displays current news events on an
            interactive world map, allowing users to explore what's happening
            across different regions through location-based visualization.
          </p>
        </div>
        <div className="project">
          <div className="image-wrapper">
            <a
              href="https://github.com/nbtrien-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectAppMovie}
                className="zoom project-img"
                alt="Movie App Android"
              />
            </a>
          </div>
          <a
            href="https://github.com/nbtrien-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Movie App Android</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://github.com/nbtrien-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            Movie App runs on android platform. This app allows users to browse
            through a wide selection of movies and filter them by various
            criteria such as popularity, genres, and release date.
          </p>
        </div>
        <div className="project">
          <div className="image-wrapper">
            <a
              href="https://github.com/nbtrien-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectWebMovie}
                className="zoom project-img"
                alt="Movie App Website"
              />
            </a>
          </div>
          <a
            href="https://github.com/nbtrien-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Movie App Website</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://github.com/nbtrien-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            Movie Streaming app runs on web platform. This app allows users to
            browse through a wide selection of movies and filter them by various
            criteria such as popularity, genres, and release date.
          </p>
        </div>
        <div className="project">
          <div className="image-wrapper">
            <a
              href="https://github.com/orphanage-platform"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectOrphangeAdmin}
                className="zoom project-img"
                alt="Orphanage Management Admin"
              />
            </a>
          </div>
          <a
            href="https://github.com/orphanage-platform"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Orphanage Management Admin</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://github.com/orphanage-platform"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            This project is a web application built using ReactJS for the
            management of an orphanage. It provides a user-friendly interface to
            efficiently manage the orphanage's operations and data.
          </p>
        </div>
        <div className="project">
          <div className="image-wrapper">
            <a
              href="https://github.com/orphanage-platform"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectOrphangeWebsite}
                className="zoom project-img"
                alt="Orphanage Website"
              />
            </a>
          </div>
          <a
            href="https://github.com/orphanage-platform"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Orphanage Website</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://github.com/orphanage-platform"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            This project is a web application built using ReactJS for an
            orphanage. It provides a user-friendly interface for effective
            interaction with the orphanage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
