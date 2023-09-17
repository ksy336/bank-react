import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPaymentScheduleQuery } from '../../../../store/api/apiSlice';
import arrowUp from '../../../assets/icons/Arrow_drop_up.svg';
import arrowDown from '../../../assets/icons/Arrow_drop_down.svg';
import PaymentTable from './Components/PaymentTable';
import PaymentTableSimple from './Components/PaymentTableSimple';
import Button from '../../../components/Button/Button';
import {useSendDocumentMutation} from '../../../../store/api/apiSlice';
import Modal from '../../../components/Modal/Modal';
import { ScheduleStepContext } from '../../../../store/FormsContext/scheduleContext';

const PaymentSchedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate()
  const {id} = useParams();
  const {setScheduleStep} = useContext(ScheduleStepContext);

  const {data = {}} = useGetPaymentScheduleQuery();
  const [sendSchedule, {isLoading}] = useSendDocumentMutation();

  const sendDataHandler = async (event) => {
    event.preventDefault();

    if (isValid) {
      setScheduleStep("result")
      try {
        await sendSchedule(id).unwrap();
      } catch(e) {
        console.warn(e);
        throw new Error(e);
      }
    }
  }

  if (isLoading) return  <div className="customize-text">Loading...</div>;

  return (
    <>
      {showModal && (
        <Modal onConfirm={() => setShowModal(false)}>
          <header className="header">
            <h2>Deny application</h2>
          </header>
          <main className="modal-main">You exactly sure, you want to cancel this application?
          </main>
          <footer className="actions">
            <Button className="deny" onClick={() => navigate("/")}>Deny</Button>
            <Button  className="button-send-payment" onClick={() => setShowModal(false)}>Cancel</Button>
          </footer>
        </Modal>
      )}
    <div className="form-container wrapper">
      <div className="customize-text">
        <h2>Payment Schedule</h2>
        <span>Step 3 of 5</span>
      </div>
      <div className="table-schedule-container">
        <section className="table-heading">
          <div className="heading-name">NUMBER</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
        <section className="table-heading">
          <div className="heading-name">DATE</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
        <section className="table-heading">
          <div className="heading-name">TOTAL PAYMENT</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
        <section className="table-heading">
          <div className="heading-name">INTEREST PAYMENT</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
        <section className="table-heading">
          <div className="heading-name">DEBT PAYMENT</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
        <section className="table-heading">
          <div className="heading-name">REMAINING DEBT</div>
          <img src={arrowUp} alt="arrowUp" />
        </section>
      </div>
        {data?.credit?.paymentSchedule ? (data?.credit?.paymentSchedule.map((item, i) => (
          <PaymentTable
            key={i}
            item={item}
          />
        ))) : <PaymentTableSimple />
        }
        <section className="buttons-agree">
          <Button className="deny" onClick={() => setShowModal(true)}>Deny</Button>
          <div className="input-block-agree">
            <input type="checkbox" onChange={() =>  setIsValid((prevState) => prevState = !prevState)} />
            <label className="agree-for-checkbox">I agree with the payment schedule</label>
          </div>
          <Button type="submit" className="button-send-payment" onClick={sendDataHandler} disabled={!isValid}>Send</Button>
        </section>
    </div>
    </>
  );
};

export default PaymentSchedule;