import { createContext, useEffect, useLayoutEffect, useState } from 'react';

export type ShowSelectType = {
  showSelect: boolean;
}
export type ContextProps = {
  children: React.ReactNode;
}

export const ScheduleStepContext = createContext<ShowSelectType | null>(null);

const ScheduleContextProvider = ({children}: ContextProps) => {
  const [scheduleStep, setScheduleStep] = useState("schedule");

  useLayoutEffect(() => {
    const step = localStorage.getItem("schedule");
    if (step) setScheduleStep(step);
  },[]);

  useEffect(()=> {
    localStorage.setItem("schedule", scheduleStep);
  }, [scheduleStep]);

  return (
    <ScheduleStepContext.Provider value={{scheduleStep, setScheduleStep}}>
      {children}
    </ScheduleStepContext.Provider>
  )
}
export default ScheduleContextProvider;