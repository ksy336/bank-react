import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo 1.svg';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <section className="footer__info">
          <div className="footer__logo-info">
            <Link to="/" className="header__header-logo__image">
              <img src={logo} alt="logotype" />
            </Link>
            <div className="contacts">
              <span className="contacts__tel">+7 (495) 984 25 13</span>
              <span className="contacts__mail">info@neoflex.ru</span>
            </div>
          </div>
          <FooterNavigation />
          <p className="text__cookies">We use cookies to personalize our services and improve the user
            experience of our website. Cookies are small files containing information about previous visits to a
            website.
            If you do not want to use cookies, please change your browser settings</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;