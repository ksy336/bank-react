import React from 'react';
import money from '../../assets/icons/Money_duotone.svg';
import clock from '../../assets/icons/Clock_duotone.svg';
import calendar from '../../assets/icons/Calendar_duotone.svg';
import bag from '../../assets/icons/Bag_duotone.svg';
import credit from '../../assets/icons/Credit card_duotone.svg';

const LoanCards = () => {
  return (
    <div className="wrapper">
      <section className="block-cards__loan">
          <article className="block-card-container__loan">
            <div className="block-first">
              <img src={money} alt="icon" />
              <div className="text-loaning">Up to 50 000 ₽</div>
              <div className="text-description">Cash and transfers without commission and
                percent</div>
            </div>
            <div className="block-second">
              <img src={calendar} alt="icon" />
              <div className="text-loaning">Up to 160 days</div>
              <div className="text-description">Without percent on the loan</div>
            </div>
            <div className="block-third">
              <img src={clock} alt="icon" />
              <div className="text-loaning">Free delivery</div>
              <div className="text-description">We will deliver your card by courier at a convenient place and time for you</div>
            </div>
          </article>
        <article className="two-cards">
          <div className="block-first__long">
            <img src={bag} alt="icon" />
            <div className="text-loaning">Up to 12 months</div>
            <div className="text-description">No percent. For equipment, clothes and other purchases in installments</div>
          </div>
          <div className="block-second__long">
            <img src={credit} alt="icon" />
            <div className="text-loaning">Convenient deposit and withdrawal</div>
            <div className="text-description">At any ATM. Top up your credit card for free with cash or transfer from other cards</div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default LoanCards;