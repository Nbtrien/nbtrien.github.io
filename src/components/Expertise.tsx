import { faDocker, faReact } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Java",
  "Spring",
  "NodeJS",
  "React",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "Redis",
];

const labelsSecond = ["Git", "Docker", "AWS", "Linux", "Postman"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              Experienced in building modern web applications using Spring Boot,
              NodeJS, and React. Skilled across both frontend and backend,
              following best practices in clean code, RESTful APIs, and
              component-based design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Tools & Deployment</h3>
            <p>
              I work with Git for version control, Docker for containerizing
              applications, and Postman to test and debug APIs. I also have
              hands-on experience deploying to AWS and working in Linux
              environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
