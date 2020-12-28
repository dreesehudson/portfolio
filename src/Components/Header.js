import React, { useState } from 'react';
import Clock from './Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faNewspaper, faPenSquare, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar-expand-lg bg-secondary fixed-top navbar-shrink' expand="md">
        <NavbarBrand className='text-white' href="/"><h1 className='display-5'>reeseHudson</h1></NavbarBrand>
        <NavbarToggler className='btn-outline-white' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-5 px-lg-3 mx-2' href="/"><FontAwesomeIcon icon={faProjectDiagram} className='fa-3x mx-3' /><h3>Projects</h3></NavLink>
            </NavItem>
          <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-5 px-lg-3 mx-2' href="/blog"><FontAwesomeIcon icon={faPenSquare} className='fa-3x mx-3' /><h3>Blog</h3></NavLink>
            </NavItem>
          <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-5 px-lg-3 mx-2' href="https://www.linkedin.com/in/dreesehudson/"><FontAwesomeIcon icon={faLinkedin} className='fa-3x mx-3' /><h3>LinkedIn</h3></NavLink>
            </NavItem>
            <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-5 px-lg-3 mx-2' href="https://github.com/dreesehudson"><FontAwesomeIcon icon={faGithubSquare} className='fa-3x mx-3' /><h3>GitHub</h3></NavLink>
            </NavItem>
            <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-5 px-lg-3 rounded js-scroll-trigger'><Clock /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
