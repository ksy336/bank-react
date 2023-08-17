import React from 'react';
import Header from '../../components/Header/Header';
import OnlineBank from '../../components/OnlineBank/OnlineBank';
import Features from "../../components/Features/Features";
import Exchange from '../../components/Exchange/Exchange';
import Services from '../../components/Services/Services';
import Slider from '../../components/Slider/Slider';
import Support from '../../components/Support/Support';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <OnlineBank />
        <Features />
        <Exchange />
        <Services />
        <Slider />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default Home;