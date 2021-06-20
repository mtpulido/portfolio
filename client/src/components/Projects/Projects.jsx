import SportsBook from "../../sportsbooks.png";
import SongsYou from "../../songsyou.png";
import SalesSkywalker from "../../salesskywalker.png";
import "./Projects.css";
import { useState } from "react";
import PictureArray from "../PicturesArray/PictureArray";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import GolfCrunch from "../../golfcrunchcombined.png"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ClubHouse from "../../clubhouse.png"

const Projects = (props) => {
  const projects = [
    {
      website: "https://clubhouse-app.netlify.app/",
      github: "https://github.com/mtpulido/ClubHouse",
      picture: ClubHouse,
      title: "ClubHouse",
      info: "React | Express | MongoDB | Mongoose | JavaScript | Heroku | Material-Ui",
      caption:
        "My Crown Jewel Project. A full stack app that allows users to track their statistics for golf, create and join groups with their friends, query by different categories and timeframes, and improve their golf game.",
    },
    {
      website: "https://sales-skywalker.netlify.app/",
      github: "https://github.com/mtpulido/Sales-Skywalker",
      picture: SalesSkywalker,
      title: "Sales Skywalker",
      info: "Ruby on Rails | JavaScript | React | PostgreSQL | Heroku | CSS",
      caption:
        "A full-stack application functioning as a play-off of Sales Force. It utilizes full CRUD to allow users to manage their pool of prospects as well as stay organized in their daily tasks with To-Do lists.",
    },
    {
      website: "https://songsu.netlify.app/",
      github: "https://github.com/jstiles44/P3-Playlist-App/tree/devpmvp",
      picture: SongsYou,
      title: "SongsYOU",
      info: "React | Express | JavaScript | Mongoose | MongoDB | Heroku | CSS",
      caption:
        "A group project that allows users to build, edit, and listen to playlists. We capture data that measures individual user analytics and global user analytics to improve the UX. (Not for mobile)",
    },
    {
      website: "https://golf-crunch.netlify.app/",
      github: "https://github.com/mtpulido/Pulido-SportsBook",
      picture: GolfCrunch,
      title: "Golf Crunch",
      info: "React | JavaScript | CRUD | Airtable | CSS",
      caption:
        "A mobile application that helps golfers of all skill levels keep track of their statistics, and access customized analysis. Inspired the ClubHouse app.",
    },
    // {
    //   website: "https://mtpulido.github.io/Pulido-SportsBook/",
    //   github: "https://github.com/mtpulido/The-Golf-Crunch-App",
    //   picture: SportsBook,
    //   title: "The SportsBook",
    //   info: "JavaScript | The Odds API | HTML | CSS",
    //   caption:
    //     "I built the SportsBook 2 weeks into learning how to code. It's a web application that allows users to see the different gambling odds for the NBA pulled from a 3rd party API",
    // }
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
          <NavigateBeforeIcon  fontSize="large" />
        </div>
              <div onClick={incrementIndex} className="next-button">
            <NavigateNextIcon fontSize="large"/>
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
