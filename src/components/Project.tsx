import projectAppMovie from "../assets/images/project-app-movie.png";
import projectOrphangeAdmin from "../assets/images/project-orphanage-admin.png";
import projectOrphangeWebsite from "../assets/images/project-orphanage-website.png";
import projectWebMovie from "../assets/images/project-web-movie.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Nbtrien/movies-app-android"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={projectAppMovie}
              className="zoom project-img"
              alt="Movie App Android"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Nbtrien/movies-app-android"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Movie App Android</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="https://github.com/Nbtrien/movies-app-android"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            Movie App runs on android platform. This app allows users to browse
            through a wide selection of movies and filter them by various
            criteria such as popularity, genres, and release date. Users can
            also view detailed information about each movie, reviews, and
            recommendations.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/nbtrien-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={projectWebMovie}
              className="zoom project-img"
              alt="Movie App ReactJS"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/nbtrien-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Movie App ReactJS</h2>
          </a>
          <div className="btn-group">
            <a
              className="btn"
              href="hhttps://github.com/nbtrien-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <p>
            Movie Streaming app runs on web platform. This app allows users to
            browse through a wide selection of movies and filter them by various
            criteria such as popularity, genres, and release date. Users can
            also view detailed information about each movie, reviews, and
            recommendations.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/orphanage-platform"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={projectOrphangeAdmin}
              className="zoom project-img"
              alt="Orphanage Management Admin ReactJS"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/orphanage-platform"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Orphanage Management Admin ReactJS</h2>
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
          <a
            href="https://github.com/orphanage-platform/orphanage-website-reactjs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={projectOrphangeWebsite}
              className="zoom project-img"
              alt="Orphanage Website ReactJS"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/orphanage-platform/orphanage-website-reactjs"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Orphanage Website ReactJS</h2>
          </a>
          <div className="btn-group">
            <a className="btn">Demo</a>
            <a
              className="btn"
              href="https://github.com/orphanage-platform/orphanage-website-reactjs"
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
