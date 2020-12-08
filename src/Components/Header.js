import React, { useState } from 'react';
import Clock from './Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger' href=""><FontAwesomeIcon icon={faLinkedin} className='fa-lg ml-1 mr-2' />LinkedIn</NavLink>
            </NavItem>
            <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger' href="https://github.com/reactstrap/reactstrap"><FontAwesomeIcon icon={faCodeBranch} className='fa-lg mx-1' />GitHub</NavLink>
            </NavItem>
            <NavItem className='my-auto'>
              <NavLink className='text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger'><Clock /></NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
