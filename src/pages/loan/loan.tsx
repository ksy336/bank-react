import React, { useContext, useRef } from 'react';
import Header from '../../components/Header/Header';
import CardBlock from '../../components/CardBlock/CardBlock';
import Accordion from '../../components/Accordion/Accordion';
import LoanCards from '../../components/LoanCards/LoanCards';
import FormCard from '../../components/FormCard/FormCard';
import Footer from '../../components/Footer/Footer';
import GetCard from '../../components/GetCard/GetCard';
import LoaningCards from '../../components/LoaningCards/LoaningCards';
import { StepContext } from '../../../store/FormsContext/stepContext';
import Decision from '../../components/Decision/Decision';

const Loan = () => {
  const scrollTo = useRef();
  const {step} = useContext(StepContext);

  const stepMap = {
    form: <FormCard />,
    loaningCards: <LoaningCards />,
    decision: <Decision />,
  }

  return (
    <>
      <main className="main">
        <CardBlock scrollTo={scrollTo} />
        <Accordion />
        <LoanCards />
        <GetCard scrollTo={scrollTo} />
        {stepMap[step]}
      </main>
    </>
  );
};

export default Loan;