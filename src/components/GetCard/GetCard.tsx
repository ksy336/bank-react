import React from 'react';
import step1 from '../../assets/icons/Group 1322.svg';
import step2 from '../../assets/icons/Group 1323.svg';
import step3 from '../../assets/icons/Group 1324.svg';
export type PropRef = {
  scrollTo: React.ReactNode;
}

const GetCard = ({scrollTo}: PropRef) => {
  return (
    <div className="wrapper">
      <section className="get-card-container">
        <h2 className="deacription-to-card" ref={scrollTo}>How to get a card</h2>
        <div className="steps-cards">
          <div className="step-item">
            <img src={step1} alt="step" />
            <div className="step-text">Fill out an online application - you do not
              need to visit the bank</div>
          </div>
          <div className="step-item">
            <img src={step2} alt="step" />
            <div className="step-text">Find out the bank's decision immediately after
              filling out the application</div>
          </div>
          <div className="step-item">
            <img src={step3} alt="step" />
            <div className="step-text">The bank will deliver the card free of charge, wherever
              convenient, to your city</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetCard;