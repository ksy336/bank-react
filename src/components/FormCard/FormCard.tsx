import React from 'react';

const FormCard = () => {
  return (
    <div className="wrapper">
      <section className="form-container">
        <article className="first-side">
          <h2>Customize your card</h2>
          <span>Step 1 of 5</span>
          <div className="block-amount">
            <input type="range" />
          </div>
          <div className="contact-info">Contact Information</div>
        </article>
        <article className="second-side">
          <h3>You have chosen the amount</h3>
          <span>150 000 ₽</span>
        </article>
        <form action="" className="form-loan">
          <div className="form-block">
            <label>Your last name</label>
            <input type="text" placeholder="For Example Doe" />
          </div>
          <div className="form-block">
            <label>Your email</label>
            <input type="text" placeholder="test@gmail.com" />
          </div>
          <div className="form-block">
            <label>Your first name</label>
            <input type="text" placeholder="For Example Jhon" />
          </div>
          <div className="form-block">
            <label>Your date of birth</label>
            <input type="text" placeholder="Select Date and Time" />
          </div>
          <div className="form-block">
            <label>Your patronymic</label>
            <input type="text" placeholder="For Example Victorovich" />
          </div>
          <div className="form-block">
            <label>Your passport series</label>
            <input type="text" placeholder="0000" />
          </div>
          <div className="form-block">
            <label>Select term</label>
            <input type="text" placeholder="6 month" />
          </div>
          <div className="form-block">
            <label>Your passport number</label>
            <input type="text" placeholder="000000" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormCard;