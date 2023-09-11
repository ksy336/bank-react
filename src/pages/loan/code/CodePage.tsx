import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { FormScoring } from '../scoring/Scoring-type';
import Input from '../../../components/Input/Input';
import {useSendCodeMutation} from '../../../../store/api/apiSlice';
import { DocumentStepContext } from '../../../../store/FormsContext/documentContext';
import Button from '../../../components/Button/Button';

const CodePage = () => {
  const {handleSubmit, reset, control, formState: {errors}} = useForm<FormScoring>({mode: "onBlur"});
  const [sendCode, {isLoading}] = useSendCodeMutation();
  const {setCodeStep} = useContext(DocumentStepContext);
  const {id} = useParams();

  const handleCodeSubmit = async (formData) => {
    console.log(formData)
    setCodeStep("present");
    try {
      await sendCode(formData, id).unwrap();
      setCodeStep("present");
      reset();
    } catch(e) {
      console.warn(e);
      throw new Error(e);
    }
  }

  if (isLoading) return  <div className="customize-text">Loading...</div>;

  return (
    <section className="code-block wrapper">
      <h3>Please enter confirmation code</h3>
      <form onSubmit={handleSubmit(handleCodeSubmit)}>
        <div className="first-sign">
          <Controller
            name="number"
            control={control}
            rules={{ required: "Invalid confirmation code"}}
            render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
              <Input
                type="number"
                placeholder="0"
                className={`${errors?.number  ? "input-code error-text" : "input-code"}`}
                name={name}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            rules={{ required: "Invalid confirmation code"}}
            render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
              <Input
                type="number"
                placeholder="0"
                className={`${errors?.number  ? "input-code error-text" : "input-code"}`}
                name={name}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            rules={{ required: "Invalid confirmation code"}}
            render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
              <Input
                type="number"
                placeholder="0"
                className={`${errors?.number  ? "input-code error-text" : "input-code"}`}
                name={name}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            rules={{ required: "Invalid confirmation code"}}
            render={({ field: { onChange, value, name }, fieldState: { error } }) =>(
              <Input
                type="number"
                placeholder="0"
                className={`${errors?.number  ? "input-code error-text" : "input-code"}`}
                name={name}
                onChange={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <div className="button-code-submit">
            <Button type="submit">Send</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CodePage;