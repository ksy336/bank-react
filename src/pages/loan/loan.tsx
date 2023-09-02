import React, { useContext, useRef } from 'react';
import Header from '../../components/Header/Header';
import CardBlock from '../../components/CardBlock/CardBlock';
import Accordion from '../../components/Accordion/Accordion';
import LoanCards from '../../components/LoanCards/LoanCards';
import FormCard from '../../components/FormCard/FormCard';
import Footer from '../../components/Footer/Footer';
import GetCard from '../../components/GetCard/GetCard';
import LoaningCards from '../../components/LoaningCards/LoaningCards';
import { ShowSelectContext } from '../../../store/showSelectContext/showSelectContext';
import Decision from '../../components/Decision/Decision';

const Loan = () => {
  const scrollTo = useRef();
   const {showSelect, isSent} = useContext(ShowSelectContext);

  return (
    <>
      <Header />
      <main className="main">
        <CardBlock scrollTo={scrollTo} />
        <Accordion />
        <LoanCards />
        <GetCard />
        {!showSelect ? (<FormCard scrollTo={scrollTo} />) :  (<LoaningCards /> )}
        {!isSent ? (<LoaningCards /> ) : (<Decision /> )}
        <Footer />
      </main>
    </>
  );
};

export default Loan;