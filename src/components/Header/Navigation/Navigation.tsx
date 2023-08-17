import React from 'react';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="navigation">
        <li className="navigation__link"><a href="#" className="navigation__anchor">Credit card</a></li>
        <li className="navigation__link"><a href="#" className="navigation__anchor anchor__active">Product</a></li>
        <li className="navigation__link"><a href="#" className="navigation__anchor ">Account</a></li>
        <li className="navigation__link"><a href="#" className="navigation__anchor anchor__active">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;