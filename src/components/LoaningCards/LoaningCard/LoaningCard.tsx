import React, { useContext } from 'react';
import falseSign from "../../../assets/icons/Close_round_fill.svg";
import trueSign from "../../../assets/icons/Check_fill.svg";
import gift from "../../../assets/img/SurpriseImage 1.png";
import Button from '../../Button/Button';
import { CardProps } from '../LoaningCards-type';
import {useSendApplicationChoiceMutation} from "../../../../store/api/apiSlice";
import { StepContext } from '../../../../store/FormsContext/stepContext';

const LoaningCard = ({card}: CardProps) => {
  const [sendApplication, {isLoading, isError}] = useSendApplicationChoiceMutation();
  const {setStep} = useContext(StepContext);

  const selectHandler = async () => {
    setStep("decision");
    try {
      await sendApplication(card).unwrap();
    } catch (e) {
      console.warn(e);
      throw new Error(e);
    }
  }
  if (isLoading) return  <div className="customize-text">Loading...</div>;

  return (
    <section className="card-loan-block">
      <div className="gift-for-card">
        <img src={gift} alt="gift" height="150" width="150"/>
      </div>
      <div>Requested amount: {card?.requestedAmount} ₽</div>
      <div>Total amount: {card?.totalAmount} ₽</div>
      <div>For {card?.term} months</div>
      <div>Monthly payment: {card?.monthlyPayment} ₽</div>
      <div>Your rate: {card?.rate}%</div>
      <div>Insurance included {card.isInsuranceEnabled ? <img src={trueSign} alt="check fill" /> :
        <img src={falseSign} alt="close round" />}
      </div>
      <div>Salary client {card.isSalaryClient ? <img src={trueSign} alt="check fill" /> :
        <img src={falseSign} alt="close round" />}
      </div>
      <div className="button-block-selcet">
        <Button className="btn btn__online-bank btn-select" aria-label="Online Bank" onClick={selectHandler}>Select</Button>
      </div>
    </section>
  );
};

export default LoaningCard;