import { useEffect, useState } from 'react';
import CurrencyItem from './CurrencyItem/CurrencyItem';
import group from '../../assets/icons/Group.svg';
import homeApi from '../../../api/homeApi';

const Exchange = () => {
  const [currencies, setCurrencies]  = useState([]);

  useEffect(() => {
    executeApiRequest();
    setInterval(executeApiRequest,900000);
  },[]);

  const executeApiRequest = async () => {
    try {
      const results = await homeApi.getCurrencies();
      setCurrencies(results);
      console.log(results)
      // for(let i = 0; i < currencyNums.length; i++) {
      //   currencyNums[i].textContent = Number(results[i]).toFixed(2);
      // }
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
            {/*{currencies?.map((item , index) => (*/}
            {/*  <CurrencyItem*/}
            {/*    key={index}*/}
            {/*    item={item}*/}
            {/*  />*/}
            {/*))}*/}
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