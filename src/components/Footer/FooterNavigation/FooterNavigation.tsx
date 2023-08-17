import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavigation = () => {
  return (
    <nav className="footer__nav">
      <ul className="footer__navigation">
        <li className="footer__navigation__link"><Link to="/" className="footer__navigation__anchor">About bank</Link>
        </li>
        <li className="footer__navigation__link">
          <Link to="/" className="footer__navigation__anchor anchor__active">
            Ask a Question
          </Link>
        </li>
        <li className="footer__navigation__link"><Link to="/" className="footer__navigation__anchor ">Quality of
          service</Link></li>
        <li className="footer__navigation__link"><Link to="/"
                                                    className="footer__navigation__anchor anchor__active">Requisites</Link>
        </li>
        <li className="footer__navigation__link"><Link to="/" className="footer__navigation__anchor">Press
          center</Link></li>
        <li className="footer__navigation__link"><Link to="/"
                                                    className="footer__navigation__anchor anchor__active">Bank
          career</Link></li>
        <li className="footer__navigation__link"><Link to="/" className="footer__navigation__anchor ">Investors</Link>
        </li>
        <li className="footer__navigation__link"><Link to="/"
                                                    className="footer__navigation__anchor anchor__active">Analytics</Link>
        </li>
        <li className="footer__navigation__link"><Link to="/" className="footer__navigation__anchor">Business and
          processes</Link></li>
        <li className="footer__navigation__link"><Link to="/"
                                                    className="footer__navigation__anchor anchor__active">Compliance
          and business ethics</Link></li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;