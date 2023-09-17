import Button from '../Button/Button';
import card from '../../assets/img/cardImage1 1.png';
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { StepContext } from '../../../store/FormsContext/stepContext';

const CardBlock = ({scrollTo}) => {
  const {step} = useContext(StepContext);
  let buttonText = "Apply for card";

  switch(step) {
    case "form":
      buttonText = "Apply for card";
      break;
    case "loaningCards":
      buttonText = "Choose an offer";
      break;
    case "decision":
      buttonText = "Continue registration";
      break;
  }

  const handleScrollToElement = () => {
    scrollTo.current?.scrollIntoView({behavior:'smooth'});
  }

  return (
    <div className="wrapper card-block__wrapper">
      <section className="card-block__loan">
        <div className="layout-columns">
          <div className="first-column">
            <p className="loaning__text">Platinum digital credit card</p>
            <p className="loaning__description">Our best credit card. Suitable for everyday spending and shopping.
              Cash withdrawals and transfers without commission and interest.</p>
            <article className="block-info_loaning">
              <div className="info__loaning">
                <div className="info-item">Up to 160 days</div>
                <div className="percent-item">No percent</div>
              </div>
              <div className="info__loaning">
                <div className="info-item">Up to 600 000 ₽</div>
                <div className="percent-item">Credit limit</div>
              </div>
              <div className="info__loaning">
                <div className="info-item">0 ₽</div>
                <div className="percent-item">Card service is free</div>
              </div>
            </article>
            <Button className="apply-for-card" onClick={handleScrollToElement}>{buttonText}</Button>
          </div>
          <div className="second-column">
            <img src={card} alt="card"  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardBlock;