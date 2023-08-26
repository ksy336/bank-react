import React, { ChangeEvent, useState } from 'react';
import star from "../../assets/icons/_.svg"
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Controller, useForm } from 'react-hook-form';
// import success from '../../assets/icons/Check_fill@3x.png';
// import error from '../../assets/icons/Close_round_fill@3x.png';
import prescoringApi from '../../../api/prescoringApi';

const PrescoringForm = ({amount}: number) => {
  const {handleSubmit, register, reset, control, formState: {errors}} = useForm({mode: "onChange"});
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    middleName: "",
    term: "",
    mail: "",
    birthdate: "",
    passportSeries: "",
    passportNumber: "",
  });

  const formSubmitHandlePrescoring = async (formData) => {
    console.log(formData)
    try {
      // await prescoringApi.sendFormData({
      //   "amount": amount,
      //   "term": dataForm.term,
      //   "firstName": dataForm.name,
      //   "lastName": dataForm.lastName,
      //   "middleName": dataForm.middleName,
      //   "email": dataForm.mail,
      //   "birthdate": dataForm.birthdate,
      //   "passportSeries": dataForm.passportSeries,
      //   "passportNumber": dataForm.passportNumber
      // });
      await prescoringApi.sendFormData({...formData, amount});
      reset()
    } catch(e) {
      console.warn(e);
      throw new Error(e);
    }
    reset()
  }
  console.log(dataForm.lastName);
  return (
    <form className="form-loan" onSubmit={handleSubmit(formSubmitHandlePrescoring)}>
      <div className="first-block-form">
        <Controller
          control={control}
          name="lastName"
          rules={{ min: 1, required: "Enter your last name"}}
          render={({ field: { onChange, value, name },
                     fieldState: { error }
                   }) => (
            <Input
              type="text"
              className={`${errors?.lastName ? "input-prescoring error-text" : "input-prescoring"}`}
              placeholder="For Example Doe"
              label="Your last name"
              value={value}
              onChange={onChange}
              name={name}
              error={error}
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          rules={{min: 2, required: "Enter your first name"}}
          render={({ field: { onChange, value, name },
            fieldState: { error }
          }) => (
            <Input
              type="text"
              className={`${errors?.name ? "input-prescoring error-text" : "input-prescoring"}`}
              placeholder="For Example Jhon"
              label="Your first name"
              value={value}
              onChange={onChange}
              name={name}
              error={error}
            />
          )}
        />
        <Controller
          control={control}
          name="middle"
          rules={{required: false}}
          render={({ field: { onChange, value, name }, fieldState: { error } }) => (
            <Input
              type="text"
              name={name}
              className="input-prescoring"
              placeholder="For Example Victorovich"
              label="Your patronymic"
              value={value}
              onChange={onChange}
              error={error}
            />
          )}
        />
        <div className="form-block">
          <div className="label-block">
            <label>Select term </label>
          </div>
          <select
            className="input-prescoring"
            defaultValue="6 month">
            <option  onChange={(e: ChangeEvent<HTMLInputElement>) => setDataForm((prev) => ({...prev, term: e.target.value}))}>6 month</option>
            <option  onChange={(e: ChangeEvent<HTMLInputElement>) => setDataForm((prev) => ({...prev, term: e.target.value}))}>12 months</option>
            <option value=""  onChange={(e: ChangeEvent<HTMLInputElement>) => setDataForm((prev) => ({...prev, term: e.target.value}))}>18 month</option>
            <option value=""  onChange={(e: ChangeEvent<HTMLInputElement>) => setDataForm((prev) => ({...prev, term: e.target.value}))}>24 month</option>
          </select>
        </div>
      </div>
      <div className="second-block-form">
        <Controller
          name="email"
          control={control}
          rules={{pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Incorrect email address"}, required: "Incorrect email address"}}
          render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
            <Input
              type="email"
              placeholder="test@gmail.com"
              className={`${errors?.email ? "input-prescoring error-text" : "input-prescoring"}`}
              name={name}
              label="Your email"
              onChange={onChange}
              value={value}
              error={error}
            />
          )}
        />
        <Controller
          name="birthdate"
          control={control}
          rules={{min: 18, required: "Incorrect date of birth"}}
          render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
            <Input
              className={`${errors?.birthdate ? "input-prescoring error-text" : "input-prescoring"}`}
              type="date"
              placeholder="Select Date and Time"
              onChange={onChange}
              value={value}
              name={name}
              error={error}
              label="Your date of birth"
            />
          )}
        />
        <Controller
          name="series"
          control={control}
          rules={{required: "The series must be 4 digits"}}
          render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
            <Input
              className={`${errors?.series ? "input-prescoring error-text" : "input-prescoring"}`}
              type="text"
              placeholder="0000"
              onChange={onChange}
              value={value}
              name={name}
              error={error}
              label="Your passport series"
            />
          )}
        />
        <Controller
          name="number"
          control={control}
          rules={{required: "The series must be 6 digits"}}
          render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
            <Input
              className={`${errors?.number ? "input-prescoring error-text" : "input-prescoring"}`}
              type="text"
              placeholder="000000"
              onChange={onChange}
              value={value}
              name={name}
              error={error}
              label="Your passport number"
            />
          )}
        />
      </div>
      <div className="button-prescoring">
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default PrescoringForm;