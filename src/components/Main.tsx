import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import "../assets/styles/Main.scss";
import ResumePreviewModal from "./ResumePreviewModal";
import avatar from "../assets/images/avatar.jpg";

function Main() {
  const [open, setOpen] = useState(false);
  const fileUrl =
    "https://trnb-bucket.s3.us-east-1.amazonaws.com/Nguyen-Ba-Trien-CV-SE.pdf";

  const handleOpenResume = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(fileUrl, "_blank");
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="profile">
          <div className="image-wrapper">
            <img
              src={avatar}
              alt="Avatar"
            />
          </div>
          <h1>Nguyen Ba Trien</h1>
          <h3 className="role">Software Engineer</h3>
                    <div className="mobile_social_icons">
            <a
              href="https://github.com/Nbtrien"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/trien-nguyen-ba-a3920a267"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Nbtrien"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/trien-nguyen-ba-a3920a267"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="summary">
            <h3>Professional Summary</h3>
            <p>
              I'm a Software Engineer with nearly 2 years of experience in
              full-stack web development, working with Java, Spring Boot,
              Node.js, and React.js. I have hands-on experience building
              scalable applications, deploying services with Docker, and running
              systems on AWS and Linux environments.
            </p>
          </div>
          {/* <h1>Nguyen Ba Trien</h1>
          <p>Software Engineer</p> */}
          <div className="btn-resume">
            <button className="btn" onClick={handleOpenResume}>
              Resume
            </button>
          </div>
        </div>
      </div>
      <ResumePreviewModal
        open={open}
        onClose={() => setOpen(false)}
        fileUrl={fileUrl}
      />
    </div>
  );
}

export default Main;
