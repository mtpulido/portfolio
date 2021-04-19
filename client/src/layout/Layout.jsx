import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout-children">{props.children}</div>
      <footer className="footer">
      <a
        href="https://www.linkedin.com/in/mpulido03/"
        target="_blank"
          rel="noreferrer"
          className="footer-elements"
      >
       <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a
        href="https://github.com/mtpulido"
        target="_blank"
          rel="noreferrer"
          className="footer-elements"
      >
     <i class="fab fa-github"></i> GitHub
      </a>
      </footer>
    </div>
  );
};

export default Layout;

