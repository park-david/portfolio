import { Link, Element } from 'react-scroll'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Projects from '../Projects'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'


export default function App() {
  return (
    <>
        <Menu vertical className='navBar'>
          <Menu.Item>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              David
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              Projects
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item>
              <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume </a>
          </Menu.Item>
        </Menu>

    <div className="pages">
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  </>
  )
}