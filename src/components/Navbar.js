import React from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/blog/">Blog page</Link>
        </li>
        <li>
          <Link to="/services/">Services page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
