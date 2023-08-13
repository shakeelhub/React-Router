import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar d-flex justify-content-center'>
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/fullstack">Full Stack Development</Link></li>
        <li><Link to="/datascience">Data Science</Link></li>
        <li><Link to="/cybersecurity">Cyber Security</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
      <hr className='line'/>
    </nav>
  );
};

export default Navigation;
