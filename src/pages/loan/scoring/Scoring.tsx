import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const Scoring = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <>
      <section className="wrapper">

      </section>
    </>
  );
};

export default Scoring;