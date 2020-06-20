import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Menu() {
  return (
    <>
      <nav className="menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className="nav-item">
            <HashLink smooth to='#contact'>Contacts</HashLink>
          </li>
        </ul>
      </nav>
    </>
  )
}