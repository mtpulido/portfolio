import './AboutMe.css'
// import { Link } from "react-router-dom"
import { Link } from "react-scroll"
import DownArrow from "../../downarrow.png"
import ReactTypingEffect from 'react-typing-effect'

const AboutMe = (props) => {
  return (
    <>
      <div className="aboutme-container" id="about-me">
      <div className="nav-links-container">
          {/* <Link to="/contact"> */}
            <div className="nav-links">Contact</div>
          {/* </Link> */}
          <a
           href="https://drive.google.com/file/d/184ofYRkfnMZ7eVv8DxYdu-0_ssp_Lm2d/view?usp=sharing"
           target="_blank"
           rel="noreferrer">
            <div className="nav-links">Resume</div>
            </a>
        </div>
        {/* <img src={headshot} alt="headshot" className="headshot" /> */}
        <div className="greeting-container">
      <div className="greeting">Hello! My name is Mike Pulido</div>
          <div className="tagline">I'm <ReactTypingEffect speed={95} eraseSpeed={80} eraseDelay={1500} typingDelay={800}
        text={["a Software Engineer.", "an Avid Golfer.", "a Dog Lover."]}
      />  </div>
        </div>
        <div className="scroll-button-container"><Link to="skills" spy={true} smooth={true}> <img src={DownArrow} alt="arrow" className="arrow-navigation bounce-5" /></Link></div>
      {/* <div className="brand-statement"> Having spent 6 years as a B2B Sales Consultant, I love diagnosing problems and finding solutions for complex business challenges. Critical thinking, communication, and execution are key to my everyday approach as a professional. I firmly believe the only two things you can control are effort and attitude, and apply that mindset everyday to improve myself as a Software Developer.</div>
      <div className="details-statement"> While advising businesses on Human Capital Management, I've learned that culture and development are the most important qualities that I admire in a company. I'm looking to join a team that emphasizes company culture and employee development, in addition to the the techincal skillset I've picked up through General Assembly's 12 week Software Engineering Immersive Program. </div> */}
      </div>
      </>
  )
}

export default AboutMe