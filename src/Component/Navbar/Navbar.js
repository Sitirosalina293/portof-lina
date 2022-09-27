import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render(){
    return (
    <div className="head2">
      <nav className="header_2 mx-auto navbar sticky-top d-flex">
        <div className='Tag'>
        <Link to="/" className='nav-link'><h3 className='fw-bold'>Ros'art</h3></Link>
        </div>
        <div className="Nvabar col2 nav-item">
          <Link to="/" className='col2-item'>Home</Link>
          <Link to="/about" className='col2-item mx-4'>About</Link>
          <Link to="/experience" className='col2-item'>Experience</Link>
          <Link to="/skills" className='col2-item mx-4'>Skills</Link>
          <Link to="/interest" className='col2-item'>Interest</Link>
          <Link to="/awards" className='col2-item ms-4'>Awards</Link>
        </div>
        <div className='connect'>
          <a href='https://www.linkedin.com/in/sitirosalina29/'>
            <button className=' py-1 px-4 fw-bold'>
              Let's Connect
            </button>
          </a>
        </div>
      </nav >
    </div>
  )
}
}
export default Header