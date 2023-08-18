import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="navigation">
        <li className="navigation__link"><Link to="/loan" className="navigation__anchor">Credit card</Link></li>
        <li className="navigation__link"><Link to="/" className="navigation__anchor anchor__active">Product</Link></li>
        <li className="navigation__link"><Link to="/" className="navigation__anchor ">Account</Link></li>
        <li className="navigation__link"><Link to="/" className="navigation__anchor anchor__active">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;