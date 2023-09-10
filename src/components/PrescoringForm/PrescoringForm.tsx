import React, { ChangeEvent, useContext, useState } from 'react';
import star from "../../assets/icons/_.svg"
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Controller, useForm } from 'react-hook-form';
// import success from '../../assets/icons/Check_fill@3x.png';
// import error from '../../assets/icons/Close_round_fill@3x.png';
import prescoringApi from '../../../api/prescoringApi';
import Select from '../Select/Select';
import {StepContext} from '../../../store/FormsContext/stepContext';

const PrescoringForm = ({amount}: number) => {
  const {handleSubmit, reset, control, formState: {errors}} = useForm({mode: "onChange"});
  const {setStep} = useContext(StepContext);

  const formSubmitHandlePrescoring = async (formData) => {
    console.log(formData)
    setStep("loaningCards");
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
      reset();
      setStep("loaningCards");
    } catch(e) {
      console.warn(e);
      throw new Error(e);
    }
    reset()
  }

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
        <Controller
          name="birthdate"
          control={control}
          rules={{ required: false}}
          render={({ field: { onChange, name }, fieldState: { error } }) =>(
            <Select
              className="input-prescoring"
              defaultValue="6 month"
              onChange={onChange}
              name={name}
              label="Select term"
              options={["6 months", "12 months", "18 months", "24 months"]}
            />
          )}
        />
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