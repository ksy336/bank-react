import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import image from "../../assets/img/404.png";


const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <section className="main-notfound-block">
            <article className="image-notfound">
              <div className="info-about404">
                <h3 className="text-main-not-found">Oops....</h3>
                <h3 className="text-main-not-found-second">Page not found</h3>
                <p className="text-not-found">This Page doesn`t exist or was removed! We suggest you go back.</p>
                <Link to="/">
                  <Button className="btn btn__online-bank" aria-label="Online Bank">Go Back</Button>
                </Link>
              </div>
              <div className="image-info">
                <img src={image} alt="info" width="526" height="526" />
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;