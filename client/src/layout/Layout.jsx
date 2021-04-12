import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="nav-container">
        <div className="nav-name-container">
          <div className="nav-name">Mike Pulido</div>
          <div className="nav-title">Software Engineer</div>
        </div>
        <div className="nav-links-container">
          <div className="nav-links">Contact</div>
          <div className="nav-links">Resume</div>
        </div>
      </div>
      <div className="layout-children">{props.children}</div>
      <footer className="footer">
      <a
        href="https://www.linkedin.com/in/mpulido03/"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a
        href="https://github.com/mtpulido"
        target="_blank"
        rel="noreferrer"
      >
     <i class="fab fa-github"></i> GitHub
      </a>
      </footer>
    </div>
  );
};

export default Layout;

