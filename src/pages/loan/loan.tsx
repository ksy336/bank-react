import React from 'react';
import Header from '../../components/Header/Header';
import CardBlock from '../../components/CardBlock/CardBlock';
import Accordion from '../../components/Accordion/Accordion';
import LoanCards from '../../components/LoanCards/LoanCards';
import FormCard from '../../components/FormCard/FormCard';
import Footer from '../../components/Footer/Footer';
import GetCard from '../../components/GetCard/GetCard';

const Loan = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CardBlock />
        <Accordion />
        <LoanCards />
        <GetCard />
        <FormCard />
        <Footer />
      </main>
    </>
  );
};

export default Loan;