import React from 'react';
import star from "../../assets/icons/_.svg"
import Button from '../Button/Button';

const PrescoringForm = () => {
  return (
    <form className="form-loan">
      <div className="first-block-form">
        <div className="form-block">
          <div className="label-block">
            <label>Your last name </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="For Example Doe" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your first name </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="For Example Jhon" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your patronymic</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="For Example Victorovich" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Select term </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="6 month" />
        </div>
      </div>
      <div className="second-block-form">
        <div className="form-block">
          <div className="label-block">
            <label>Your email</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="test@gmail.com" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your date of birth</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="Select Date and Time" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your passport series </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="0000" />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your passport number</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <input className="input-prescoring" type="text" placeholder="000000" />
        </div>
      </div>
      <div className="button-prescoring">
        <Button>Continue</Button>
      </div>
    </form>
  );
};

export default PrescoringForm;