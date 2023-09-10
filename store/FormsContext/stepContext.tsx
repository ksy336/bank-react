import { createContext, useEffect, useLayoutEffect, useState } from 'react';

export type ShowSelectType = {
  showSelect: boolean;
}
export type ContextProps = {
  children: React.ReactNode;
}

export const StepContext = createContext<ShowSelectType | null>(null);

const ContextProvider = ({children}: ContextProps) => {
  const [step, setStep] = useState("form");

  useLayoutEffect(() => {
    const step = localStorage.getItem("step");
    if (step) setStep(step);
  },[]);

  useEffect(()=> {
    localStorage.setItem("step", step);
  }, [step]);

  return (
    <StepContext.Provider value={{step, setStep}}>
      {children}
    </StepContext.Provider>
  )
}
export default ContextProvider;