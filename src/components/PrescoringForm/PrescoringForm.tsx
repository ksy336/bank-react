import React, { ChangeEvent, useState } from 'react';
import star from "../../assets/icons/_.svg"
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';
import success from '../../assets/icons/Check_fill@3x.png';
import error from '../../assets/icons/Close_round_fill@3x.png';

const PrescoringForm = () => {
  const {handleSubmit, register, reset, formState: {errors}} = useForm({mode: "onChange"});
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [term, setTerm] = useState("");
  const [mail, setMail] = useState("");
  const [birthdate,setBirthdate] = useState("");
  const [passportSeries, setPassportSeries] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  const formSubmitHandlePrescoring = () => {

  }

  return (
    <form className="form-loan" onSubmit={handleSubmit(formSubmitHandlePrescoring)}>
      <div className="first-block-form">
        <div className="form-block">
          <div className="label-block">
            <label>Your last name </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.lastName ? "input-prescoring error-text" : "input-prescoring"}`}
            type="text"
            placeholder="For Example Doe"
            {...register("lastName", {
              min: 2,
              required: "Enter your last name",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
            })} />
          {/*{!errors?.lastName && <span className="success-check"><img src={success} alt="success" /></span>}*/}
          {/*{errors?.lastName && <span className="error-check"><img src={error} alt="success" /></span>}*/}
          {errors?.lastName && <div className="error-description">{errors?.lastName?.message}</div>}
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your first name </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.name ? "input-prescoring error-text" : "input-prescoring"}`}
            type="text"
            placeholder="For Example Jhon"
            {...register("name", {
              min: 2,
              required: "Enter your first name",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
            })} />
          {errors?.name && <div className="error-description">{errors?.name?.message}</div>}
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your patronymic</label>
          </div>
          <Input
            className="input-prescoring"
            type="text"
            placeholder="For Example Victorovich"
            {...register("middle", {
              required: false,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setMiddleName(e.target.value)
            })} />
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Select term </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <select
            className="input-prescoring"
            defaultValue="6 month"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}>
            <option defaultValue="6 month">6 month</option>
            <option value="6 month">12 months</option>
            <option value="">18 month</option>
            <option value="">24 month</option>
          </select>
        </div>
      </div>
      <div className="second-block-form">
        <div className="form-block">
          <div className="label-block">
            <label>Your email</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.email ? "input-prescoring error-text" : "input-prescoring"}`}
            type="email"
            placeholder="test@gmail.com"
            {...register("email", {
              pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              required: "Incorrect email address",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)
            })}
          />
          {errors?.email && <div className="error-description">{errors?.email?.message}</div>}
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your date of birth</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.birthdate ? "input-prescoring error-text" : "input-prescoring"}`}
            type="date"
            placeholder="Select Date and Time"
            {...register("birthdate", {
              min: 18,
              required: "Incorrect date of birth",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setBirthdate(e.target.value)
            })}
          />
          {errors?.birthdate && <div className="error-description">{errors?.birthdate?.message}</div>}
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your passport series </label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.series ? "input-prescoring error-text" : "input-prescoring"}`}
            type="number"
            placeholder="0000"
            {...register("series", {
              min: 4,
              max: 4,
              required: "The series must be 4 digits",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setPassportSeries(e.target.value)
            })} />
          {console.log(errors?.series)}
          {errors?.series && <div className="error-description">{errors?.series?.message}</div>}
        </div>
        <div className="form-block">
          <div className="label-block">
            <label>Your passport number</label>
            <span><img src={star} alt="star" /></span>
          </div>
          <Input
            className={`${errors?.number ? "input-prescoring error-text" : "input-prescoring"}`}
            type="number"
            placeholder="000000"
            {...register("number", {
              min: 6,
              max: 6,
              required: "The series must be 6 digits",
              onChange: (e: ChangeEvent<HTMLInputElement>) => setPassportNumber(e.target.value)
            })} />
          {errors?.number && <div className="error-description">{errors?.number?.message}</div>}
        </div>
      </div>
      <div className="button-prescoring">
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default PrescoringForm;