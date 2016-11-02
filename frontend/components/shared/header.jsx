import React from 'react';
import { Link, withRouter } from 'react-router';

const Header = (props) => {
  return (
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li><Link to='/login'>Log in</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
