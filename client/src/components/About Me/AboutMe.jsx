import headshot from '../../headshot.png'
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
import './AboutMe.css'

const AboutMe = (props) => {
  return (
    <>
    <div className="aboutme-container">
      <img src={headshot} alt="headshot" className="headshot" />
      <div className="greeting">Hello! My name is Mike Pulido</div>
      <div className="tagline">I'm a Software Engineer, Avid Golfer, and Dog Lover</div>
      <div className="brand-statement"> Having spent 6 years as a B2B Sales Consultant, I love diagnosing problems and finding solutions for complex business challenges. Critical thinking, communication, and execution are key to my everyday approach as a professional. I firmly believe the only two things you can control are effort and attitude, and apply that mindset everyday to improve myself as a Software Developer.</div>
      <div className="details-statement"> While advising businesses on Human Capital Management, I've learned that culture and development are the most important qualities that I admire in a company. I'm looking to join a team that emphasizes company culture and employee development, in addition to the the techincal skillset I've picked up through General Assembly's 12 week Software Engineering Immersive Program. </div>
      </div>
      <div className="skills-container">
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
      </>
  )
}

export default AboutMe