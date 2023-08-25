import React, { ChangeEvent, useState } from 'react';
import PrescoringForm from '../PrescoringForm/PrescoringForm';
import Input from '../Input/Input';
export type PropRef = {
  scrollTo: React.ReactNode;
}

const FormCard = ({scrollTo}) => {
  const [amount, setAmount] = useState("");
  return (
    <div className="wrapper">
      <section className="form-container">
        <div className="prescoring-block">
          <article className="first-side">
            <div className="customize-text">
              <h2>Customize your card</h2>
              <span>Step 1 of 5</span>
            </div>
            <div className="block-amount">
              <h5 className="select-amount">Select amount</h5>
              <div className="one-hundred-money">150 000</div>
              <input
                className="range-input"
                type="range" min="15 000"
                max="600 000"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              />
              <div className="block-money">
                <div className="amount-span">15 000</div>
                <span>600 000</span>
              </div>
            </div>
            <h5 className="contact-info" ref={scrollTo}>Contact Information</h5>
          </article>
          <article className="second-side">
            <h6>You have chosen the amount</h6>
            <span>150 000 ₽</span>
          </article>
        </div>
        <PrescoringForm scrollTo={scrollTo} amount={amount} />
      </section>
    </div>
  );
};

export default FormCard;