import Javascript from "../../javascript.png"
import React from "../../react.png"
import Express from "../../expressjs.png"
import Ruby from "../../ruby.png"
import Rails from "../../rails.png"
import PostgreSQL from "../../postgresql.png"
import Mongoose from "../../mongoose.png"
import MongoDB from "../../mongodb.png"
import Git from "../../git.png"
import CSS3 from "../../css.png"
import { Link } from "react-scroll"
import BlackDownArrow from "../../blackdownarrow.png"
import "./Skills.css"


const Skills = (props) => {
  return (
   <div className="big-skills-container">
    <div className="skills-container" id='skills'>
    <div className="skills-label">SKILLS</div>
      <div className="skills">
      <div className="skill"> <img src={Javascript} alt="javascript" className="skill-image" />JavaScript</div>
      <div className="skill"> <img src={React} alt="react" className="skill-image" />React</div>
      <div className="skill"> <img src={Express} alt="express" className="skill-edited" />Express</div>
      <div className="skill"> <img src={Ruby} alt="Ruby" className="skill-image" />Ruby</div>
      <div className="skill"> <img src={Rails} alt="Rails" className="skill-image" />Rails</div>
      <div className="skill"> <img src={PostgreSQL} alt="PostgreSQL" className="skill-image" />PostgreSQL</div>
      <div className="skill"> <img src={Mongoose} alt="Mongoose" className="skill-image" />Mongoose</div>
      <div className="skill"> <img src={MongoDB} alt="MongoDB" className="skill-image" />MongoDB</div>
      <div className="skill"> <img src={Git} alt="Git" className="skill-git" />Git</div>
      <div className="skill"> <img src={CSS3} alt="CSS3" className="skill-image"/>CSS 3</div>
      </div>
    </div>
      <div className="skills-scroll-button-container"><Link to="projects" spy={true} smooth={true}> <img src={BlackDownArrow} alt="arrow" className="down-arrow-navigation bounce-5" /></Link></div>
      </div>
  )
}
export default Skills