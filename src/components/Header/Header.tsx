import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import neoBank from "../../assets/icons/NeoBank.svg";
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__header-logo">
          <Link to="/" className="header__header-logo__image">
            <img src={neoBank} alt="logo" width="125px" height="15px" />
          </Link>
        </div>
        <Navigation />
        <div className="button__online-bank">
          <Button className="btn btn__online-bank" aria-label="Online Bank">Online Bank</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;