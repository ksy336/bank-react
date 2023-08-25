import { useEffect, useState } from 'react';
import Currencies from './CurrencyItem/Currencies';
import group from '../../assets/icons/Group.svg';
import homeApi from '../../../api/homeApi';

const Exchange = () => {
  const [currencies, setCurrencies]  = useState([]);

  useEffect(() => {
    executeApiRequest();
    const interval  = setInterval(executeApiRequest,900000);
    return () => {
      clearInterval(interval);
    }
  },[]);

  const executeApiRequest = async () => {
    try {
      const results = await homeApi.getCurrencies();
      setCurrencies(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="main__main__exchange">
      <div className="wrapper exchange__wrapper">
        <article className="main__info-exchange">
          <div className="currency-data">
            <h2>Exchange rate in internet bank</h2>
            <h6>Currency</h6>
              <Currencies currencies={currencies} />
            <p className="exchange__courses">All courses</p>
          </div>
          <div className="exchange__update">
            <p>Update every 15 minutes, MSC 09.08.2022</p>
            <div className="image-info-exchange">
              <img src={group} alt="Bank house" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Exchange;