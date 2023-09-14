import React from 'react';
import present from '../../assets/img/SurpriseImage 1.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Present = () => (
    <section className="wrapper">
      <article className="decision-block present-block">
        <img src={present} alt="present" width="150" height="150" />
        <div className="decision-text">Congratulations! You have completed your new credit card.</div>
        <div className="decision-description">Your credit card will arrive soon. Thank you for choosing us!</div>
        <Link to="/">
          <Button className="button-home">View other offers of our bank</Button>
        </Link>
      </article>
    </section>
  );

export default Present;