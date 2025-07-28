import "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="05/2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">FPT SOFTWARE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineer
            </h4>
            <p>
              Developed full-stack web applications for AI products using
              ReactJS, Spring Boot, Node.js, PostgreSQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 - 10/2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BAP SOFTWARE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineer Intern
            </h4>
            <p>
              Collaborated with a team of developers to implement backend logic
              using Java and Spring Boot, and worked with Jira, Git, and
              PostgreSQL in an Agile environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/2023 - 7/2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">FPT SOFTWARE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Java Developer Intern
            </h4>
            <p>
              Participated in team-based backend projects as a Java Developer
              Intern, gaining hands-on experience with Java, Spring Boot, and
              MySQL under the mentorship of senior engineers.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
