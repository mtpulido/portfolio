import SportsBook from "../../sportsbooks.png"
import GolfCrunch from "../../golfcrunch.png"
import SongsYou from "../../songsyou.png"
import SalesSkywalker from "../../salesskywalker.png"
import './Projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
        <a
        href="https://songsu.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
      <div className="project">
        <img src={SongsYou} alt="project" className="project-image" />
        <div className="project-title">SongsYOU</div>
        <div className="project-caption">A group project utilizing the full stack that allows users to build, edit, and listen to playlists. We capture data that measures individual user analytics and global user analytics to improve the UX.</div>
        </div>
      </a>
      <a
        href="https://golf-crunch.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
      <div className="project">
        <img src={GolfCrunch} alt="project" className="project-image" />
        <div className="project-title">Golf Crunch</div>
        <div className="project-caption">A mobile application that helps golfers of all skill levels keep track of their statistics, access    customized analysis, and view the rounds their friends have submitted. </div>
        </div>
      </a>
      <a
        href="https://affectionate-mayer-464b3c.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
      <div className="project">
        <img src={SalesSkywalker} alt="project" className="project-image" />
        <div className="project-title">Sales Skywalker</div>
        <div className="project-caption">A full-stack application functioning as a play-off of Sales Force. It shows users their relevant analytics to improve their performance as well as stay organized in their daily tasks. </div>
        </div>
      </a>
      <a
        href="https://mtpulido.github.io/Pulido-SportsBook/"
        target="_blank"
        rel="noreferrer"
      >
      <div className="project">
        <img src={SportsBook} alt="project" className="project-image" />
        <div className="project-title">Pulido SportsBook</div>
        <div className="project-caption">A web application that allows users to see the different gambling odds for the NBA</div>
        </div>
        </a>
      </div>
     
  );
}

export default Projects