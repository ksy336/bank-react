import React, { useContext } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';
import Button from '../../../components/Button/Button';
import { useSendFormScoringMutation } from '../../../../store/api/apiSlice';
import { SoringStepContext } from '../../../../store/FormsContext/scoringContext';
import { FormScoring } from './Scoring-type';

const Scoring = () => {
  const {handleSubmit, reset, control, formState: {errors}} = useForm<FormScoring>({mode: "onChange"});
  const [sendScoring, {isLoading}] = useSendFormScoringMutation();
  const {setScoringStep} = useContext(SoringStepContext);
  const {id} = useParams();

  const formSubmitHandleScoring = async (formData) => {
    setScoringStep("waitingDecision");
    try {
      await sendScoring(formData, id).unwrap();
      reset();
    } catch(e) {
      console.warn(e);
      throw new Error(e);
    }
  }
  if (isLoading) return  <div className="customize-text">Loading...</div>;

  return (
    <>
      <section className="form-container wrapper">
        <div className="customize-text">
          <h2>Continuation of the application</h2>
          <span>Step 2 of 5</span>
        </div>
        <form className="form-loan" onSubmit={handleSubmit(formSubmitHandleScoring)}>
          <div className="first-block-form">
            <Controller
              defaultValue="male"
              name="gender"
              control={control}
              rules={{ required: "Select one of the options"}}
              render={({ field: { onChange, name, value }, fieldState: { error } }) =>(
                <Select
                  className={errors?.gender ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  value={value}
                  onChange={onChange}
                  // name={name}
                  label="What's your gender"
                  error={error}
                  options={["male", "female"]}
                />
              )}
            />
            <Controller
              defaultValue="married"
              name="maritalStatus"
              control={control}
              rules={{ required: "Select one of the options"}}
              render={({ field: { onChange, name, value }, fieldState: { error } }) =>(
                <Select
                  className={errors?.maritalStatus ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  onChange={onChange}
                  value={value}
                  name={name}
                  label="Your marital status"
                  error={error}
                  options={["married", "divorced", "single", "widow/widower"]}
                />
              )}
            />
            <Controller
              defaultValue="1"
              name="dependentAmount"
              control={control}
              rules={{ required: "Select one of the options"}}
              render={({ field: { onChange, name , value}, fieldState: { error } }) =>(
                <Select
                  className={errors?.dependentAmount ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  value={value}
                  onChange={onChange}
                  name={name}
                  label="Your number of dependents"
                  error={error}
                  options={["1", "2", "3"]}
                />
              )}
            />
          </div>
          <div className="second-block-form">
            <Controller
              name="passportIssueDate"
              control={control}
              rules={{ required: "Incorrect date of passport issue date"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  type="date"
                  placeholder="Select Date and Time"
                  className={errors?.passportIssueDate  ? "input-prescoring input-prescoring__max-long error-text" : "input-prescoring input-prescoring__max-long"}
                  name={name}
                  label="Date of issue of the passport"
                  onChange={onChange}
                  value={value}
                  error={error}
                />
              )}
            />
            <Controller
              name="passportIssueBranch"
              control={control}
              rules={{minLength: 6, maxLength: 6,  required: "The series must be 6 digits"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  className={errors?.passportIssueBranch ? "input-prescoring input-prescoring__max-long error-text" : "input-prescoring input-prescoring__max-long"}
                  type="number"
                  placeholder="000000"
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={error}
                  label="Division code"
                />
              )}
            />
          </div>
          <div className="customize-text">Employment</div>
          <div className="first-block-form">
            <Controller
              defaultValue="unemployed"
              name="employmentStatus"
              control={control}
              rules={{ required: "Select one of the options"}}
              render={({ field: { onChange, name }, fieldState: { error } }) =>(
                <Select
                  className={errors?.employmentStatus ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  defaultValue="UNEMPLOYED"
                  onChange={onChange}
                  name={name}
                  label="Your employment status"
                  error={error}
                  options={["unemployed", "self-employed", "employed", "business-owner"]}
                />
              )}
            />
            <Controller
              name="employerINN"
              control={control}
              rules={{minLength: 12, maxLength: 12, required: "Department code must be 12 digits"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  className={errors?.employerINN ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  type="number"
                  placeholder="000000000000"
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={error}
                  label="Your employer INN"
                />
              )}
            />
            <Controller
              name="salary"
              control={control}
              rules={{required: "Enter your salary"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  className={errors?.salary ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  type="number"
                  placeholder="For example 100 000"
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={error}
                  label="Your salary"
                />
              )}
            />
          </div>
          <div className="second-block-form">
            <Controller
              defaultValue="worker"
              name="position"
              control={control}
              rules={{ required: "Select one of the options"}}
              render={({ field: { onChange, name }, fieldState: { error } }) =>(
                <Select
                  className={errors?.position ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  defaultValue="Worker"
                  onChange={onChange}
                  name={name}
                  label="Your position"
                  error={error}
                  options={["worker", "mid-manager", "top-manager", "owner"]}
                />
              )}
            />
            <Controller
              name="workExperienceTotal"
              control={control}
              rules={{required: "Enter your work experience total"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  className={errors?.workExperienceTotal ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  type="number"
                  placeholder="For example 10"
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={error}
                  label="Your work experience total"
                />
              )}
            />
            <Controller
              name="workExperienceCurrent"
              control={control}
              rules={{required: "Enter your work experience current"}}
              render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
                <Input
                  className={errors?.workExperienceCurrent ? "input-prescoring input-prescoring__long error-text" : "input-prescoring input-prescoring__long"}
                  type="number"
                  placeholder="For example 2"
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={error}
                  label="Your work experience current"
                />
              )}
            />
          </div>
          <div className="button-prescoring">
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Scoring;