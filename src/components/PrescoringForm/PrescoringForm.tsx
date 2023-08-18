import React from 'react';

const PrescoringForm = () => {
  return (
    <form action="" className="form-loan">
      <div className="first-block-form">
        <div className="form-block">
          <label>Your last name</label>
          <input type="text" placeholder="For Example Doe" />
        </div>
        <div className="form-block">
          <label>Your first name</label>
          <input type="text" placeholder="For Example Jhon" />
        </div>
        <div className="form-block">
          <label>Your patronymic</label>
          <input type="text" placeholder="For Example Victorovich" />
        </div>
        <div className="form-block">
          <label>Select term</label>
          <input type="text" placeholder="6 month" />
        </div>
      </div>
      <div className="second-block-form">
        <div className="form-block">
          <label>Your email</label>
          <input type="text" placeholder="test@gmail.com" />
        </div>
        <div className="form-block">
          <label>Your date of birth</label>
          <input type="text" placeholder="Select Date and Time" />
        </div>
        <div className="form-block">
          <label>Your passport series</label>
          <input type="text" placeholder="0000" />
        </div>
        <div className="form-block">
          <label>Your passport number</label>
          <input type="text" placeholder="000000" />
        </div>
      </div>
    </form>
  );
};

export default PrescoringForm;