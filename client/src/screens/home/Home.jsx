import AboutMe from "../../components/About Me/AboutMe"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import {Route} from "react-scroll"

const Home = (props) => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home