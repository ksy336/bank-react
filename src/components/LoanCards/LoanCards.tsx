import React from 'react';
import Block from '../Block/Block';
import money from '../../assets/icons/Money_duotone.svg';
import clock from '../../assets/icons/Clock_duotone.svg';
import calendar from '../../assets/icons/Calendar_duotone.svg';
import bag from '../../assets/icons/Bag_duotone.svg';
import credit from '../../assets/icons/Credit card_duotone.svg';
const propsArr = [
  {
    className: "block-first",
    icon: money,
    text: "Up to 50 000 ₽",
    description: "Cash and transfers without commission and percent"
  },
  {
    className: "block-second",
    icon: calendar,
    text: "Up to 160 days",
    description: "Without percent on the loan"
  },
  {
    className: "block-third",
    icon: clock,
    text: "Free delivery",
    description: "We will deliver your card by courier at a convenient place and time for you"
  },
];

const longBlocks = [
  {
    className: "block-first__long",
    icon: bag,
    text: "Up to 12 months",
    description: "No percent. For equipment, clothes and other purchases in installments"
  },
  {
    className: "block-second__long",
    icon: credit,
    text: "Convenient deposit and withdrawal",
    description: "At any ATM. Top up your credit card for free with cash or transfer from other cards"
  },
]
const LoanCards = () => {
  return (
    <div className="wrapper">
      <section className="block-cards__loan">
          <article className="block-card-container__loan">
            {propsArr.map((prop) => (
              <Block
                key={prop.className}
                className={prop.className}
                icon={prop.icon}
                text={prop.text}
                description={prop.description}
              />
            ))}
          </article>
        <article className="two-cards">
          {longBlocks.map((prop) => (
            <Block
              key={prop.className}
              className={prop.className}
              icon={prop.icon}
              text={prop.text}
              description={prop.description}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

export default LoanCards;