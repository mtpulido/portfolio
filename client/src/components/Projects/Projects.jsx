import SportsBook from "../../sportsbooks.png";
import SongsYou from "../../songsyou.png";
import SalesSkywalker from "../../salesskywalker.png";
import "./Projects.css";
import { useState } from "react";
import PictureArray from "../PicturesArray/PictureArray";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import GolfCrunch from "../../golfcrunchcombined.png"

const Projects = (props) => {
  const projects = [
    {
      website: "https://songsu.netlify.app/",
      github: "https://github.com/jstiles44/P3-Playlist-App/tree/devpmvp",
      picture: SongsYou,
      title: "SongsYOU",
      info: "React | Express | JavaScript | Mongoose | MongoDB | Heroku | CSS",
      caption:
        "A group project utilizing the full stack that allows users to build, edit, and listen to playlists. We capture data that measures individual user analytics and global user analytics to improve the UX.",
    },
    {
      website: "https://sales-skywalker.netlify.app/",
      github: "https://github.com/mtpulido/Sales-Skywalker",
      picture: SalesSkywalker,
      title: "Sales Skywalker",
      info: "Ruby on Rails | JavaScript | React | PostgreSQL | Heroku | CSS",
      caption:
        "A full-stack application functioning as a play-off of Sales Force. It shows users their relevant analytics to improve their performance as well as stay organized in their daily tasks.",
    },
    {
      website: "https://mtpulido.github.io/Pulido-SportsBook/",
      github: "https://github.com/mtpulido/The-Golf-Crunch-App",
      picture: SportsBook,
      title: "The SportsBook",
      info: "JavaScript | The Odds API | HTML | CSS",
      caption:
        "I built the SportsBook 2 weeks into learning how to code. It's a web application that allows users to see the different gambling odds for the NBA pulled from a 3rd party API",
    },
    {
      website: "https://golf-crunch.netlify.app/",
      github: "https://github.com/mtpulido/Pulido-SportsBook",
      picture: GolfCrunch,
      title: "Golf Crunch",
      info: "React | JavaScript | CRUD |Airtable | CSS",
      caption:
        "A mobile application that helps golfers of all skill levels keep track of their statistics, access customized analysis, and view the rounds their friends have submitted.",
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);
  const [fades, setFades] = useState('fade')

  const incrementIndex = () => {
    setFades('fade')
    projects.length - 1 === projectIndex ? setProjectIndex(0) : setProjectIndex((prevState) => prevState + 1);
  };
  const decrementIndex = () => {
    setFades('fades')
    projectIndex !== 0 ? setProjectIndex((prevState) => prevState - 1) : setProjectIndex(projects.length - 1);
  };

  return (
    <div className="projects-container" id="projects">
          <SwitchTransition>
      <CSSTransition
          key={projectIndex}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames={fades}
      >
          <div className="carousel-container">
            <div className="multi-images-project"><PictureArray picture={projects[projectIndex].picture}/></div>
        <div className="project-title">{projects[projectIndex].title}</div>
        <div className="project-info">{projects[projectIndex].info}</div>
        <div className="project-links">
        <a
        href={projects[projectIndex].github}
        target="_blank"
            rel="noreferrer" 
          >
            <div className="project-link">GitHub</div>
          </a>
          <a
        href={projects[projectIndex].website}
        target="_blank"
            rel="noreferrer" 
          >
            <div className="project-link">Website</div>
            </a>
          </div>
        <div className="project-caption">{projects[projectIndex].caption}</div>
        <div className="project-buttons">
        <div onClick={decrementIndex} className="back-button">
          back
        </div>
              <div onClick={incrementIndex} className="next-button">
            next
        </div>
        </div>
          </div>
          </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Projects;

// return (
//   <div className="projects-container" id="projects">
//     <div className="carousel-container">
//       <div className="project-title">{project.title}</div>
//       <div className="project-info">{project.info}</div>
//       <div className="project-links">
//       <div className="project-link">GitHub</div>
//         <div className="project-link">Website</div>
//         </div>
//       <div className="project-caption">{project.caption}</div>
//       <div className="multi-images-project">
//       {project.pictures?.map((picture, index) => {
//         return <PictureArray picture={picture} />
//       })}
//     </div>
//       <div className="project-buttons">
//       <div onClick={decrementIndex} className="back-button">
//         back
//       </div>
//       <div onClick={incrementIndex} className="next-button">
//           next
//       </div>
//       </div>
//     </div>
//   </div>
// );
// };

// useEffect(() => {
//   setProject(projects[projectIndex])
// }, [toggleClass])

// const [project, setProject] = useState({})
//   const [toggleClass, setToggleClass] = useState(false)

// setToggleClass((curr) => !curr)
