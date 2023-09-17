import React from 'react';
import cardFirst from '../../assets/img/cardImage1 1.png';
import cardSecond from '../../assets/img/cardImage2 1.png'
import cardThird from '../../assets/img/cardImage3 1.png';
import cardForth from '../../assets/img/cardImage4 1.png';

const OnlineBank = () => (
    <section className="main__main__card">
      <div className="wrapper card__wrapper">
        <article className="layout-2-column">
          <div className="card__choose">
            <h1>Choose the design you like and apply for card right now</h1>
            <div className="button__online-bank">
              <button className="btn btn__online-bank" aria-label="Online Bank">Choose the card</button>
            </div>
          </div>
          <div className="bank-cards">
            <div className="card-item">
              <img src={cardFirst} alt="card" />
              <img src={cardSecond} alt="card" />
              <img src={cardThird} alt="card" />
              <img src={cardForth} alt="card" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );


export default OnlineBank;