import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import "../assets/styles/Main.scss";
import ResumePreviewModal from "./ResumePreviewModal";

function Main() {
  const [open, setOpen] = useState(false);
  const fileUrl =
    "https://trnb-bucket.s3.us-east-1.amazonaws.com/Nguyen-Ba-Trien-CV-SE.pdf";

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/57428982?v=4"
            alt="Avatar"
          />
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
          <h1>Nguyen Ba Trien</h1>
          <p>Software Engineer</p>
          <div className="btn-resume">
            <button className="btn" onClick={() => setOpen(true)}>
              Resume
            </button>
          </div>
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
