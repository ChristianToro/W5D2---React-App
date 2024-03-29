import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/review1">Lights...Camera...Action!</Link></li>
        <li><Link to="/review2">Penny Stocks?</Link></li>
        <li><Link to="/review3">Forever Young</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;