import { createContext, useEffect, useLayoutEffect, useState } from 'react';

export type ShowSelectType = {
  showSelect: boolean;
}
export type ContextProps = {
  children: React.ReactNode;
}

export const SoringStepContext = createContext<ShowSelectType | null>(null);

const ScoringContextProvider = ({children}: ContextProps) => {
  const [scoringStep, setScoringStep] = useState("scoring");

  useLayoutEffect(() => {
    const step = localStorage.getItem("scoringStep");
    if (step) setScoringStep(step);
  },[]);

  useEffect(()=> {
    localStorage.setItem("scoringStep", scoringStep);
  }, [scoringStep]);

  return (
    <SoringStepContext.Provider value={{scoringStep, setScoringStep}}>
      {children}
    </SoringStepContext.Provider>
  )
}
export default ScoringContextProvider;